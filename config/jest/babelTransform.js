'use strict'

const path = require('path')
const glob = require('glob')
const babelJest = require('babel-jest')

const hasJsxRuntime = (() => {
  if (process.env.DISABLE_NEW_JSX_TRANSFORM === 'true') {
    return false
  }

  try {
    require.resolve('react/jsx-runtime')
    return true
  } catch (e) {
    return false
  }
})()

const createTransformer = options => {
  const transformer = babelJest.createTransformer(options)

  // const getCacheKey = transformer.getCacheKey
  // transformer.getCacheKey = (fileData, filename, ...args) => {
  //   const regexp = /^\s*import\s+(?:[^"'`{}]+\s)?(["'])(.+)\1/gm
  //   const patterns = []
  //   let match = regexp.exec(fileData)

  //   while (match !== null) {
  //     const fileImport = match[2]
  //     const lineReplace = match[0]
  //     if (glob.hasMagic(fileImport)) {
  //       patterns.push({
  //         fileImport,
  //         lineReplace
  //       })
  //     }
  //     match = regexp.exec(fileData)
  //   }

  //   if (patterns.length > 0) {
  //     const cwd = path.dirname(filename)
  //     const importNameRegex = /import ([a-zA-Z0-9]{1,}) from /

  //     for (const { fileImport, lineReplace } of patterns) {
  //       const modNames = []
  //       const matchModuleName = importNameRegex.exec(lineReplace)

  //       const files = glob
  //         .sync(fileImport, { cwd, dot: true })
  //         .map((mod, index) => {
  //           if (!matchModuleName) {
  //             return `import '${mod}'`
  //           }
  //           const moduleName = `${matchModuleName[1]}${index}`
  //           modNames.push(moduleName)
  //           return `import * as ${moduleName} from '${mod}'`
  //         })

  //       if (modNames.length) {
  //         files.push(`const ${matchModuleName[1]} = [ ${modNames.join(', ')} ]`)
  //       }

  //       fileData = fileData.replace(lineReplace, files.join('\n'))
  //     }
  //   }

  //   return getCacheKey(fileData, filename, ...args)
  // }

  const process = transformer.process
  transformer.process = (sourceText, sourcePath, ...args) => {
    const regexp = /^\s*import\s+(?:[^"'`{}]+\s)?(["'])(.+)\1/gm
    const patterns = []
    let match = regexp.exec(sourceText)

    while (match !== null) {
      const fileImport = match[2]
      const lineReplace = match[0]
      if (glob.hasMagic(fileImport)) {
        patterns.push({
          fileImport,
          lineReplace
        })
      }
      match = regexp.exec(sourceText)
    }

    if (patterns.length > 0) {
      const cwd = path.dirname(sourcePath)
      const importNameRegex = /import ([a-zA-Z0-9]{1,}) from /

      for (const { fileImport, lineReplace } of patterns) {
        const modNames = []
        const matchModuleName = importNameRegex.exec(lineReplace)

        const files = glob
          .sync(fileImport, { cwd, dot: true })
          .map((mod, index) => {
            if (!matchModuleName) {
              return `import '${mod}'`
            }
            const moduleName = `${matchModuleName[1]}${index}`
            modNames.push(moduleName)
            return `import * as ${moduleName} from '${mod}'`
          })

        if (modNames.length) {
          files.push(`const ${matchModuleName[1]} = [ ${modNames.join(', ')} ]`)
        }

        sourceText = sourceText.replace(lineReplace, files.join('\n'))
      }
    }

    return process(sourceText, sourcePath, ...args)
  }

  return transformer
}

module.exports = createTransformer({
  presets: [
    [
      require.resolve('babel-preset-react-app'),
      {
        runtime: hasJsxRuntime ? 'automatic' : 'classic'
      }
    ]
  ],
  babelrc: false,
  configFile: false
})

module.exports.createTransformer = createTransformer
