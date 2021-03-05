/**
 * File name: index.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2021-03-05 14:46:18
 */
const fs = require('fs')
const path = require('path')
const http = require('http')

// maps file extention to MIME types
// full list can be found here: https://www.freeformatter.com/mime-types-list.html
const mimeType = require('./mimeType.json')

// you can pass the parameter in the command line. e.g. node static_server.js 3000
const port = process.env.PORT || 3000

http.createServer((req, res) => {
  console.log(`${req.method} | ${req.url}`)

  // extract URL path
  // Avoid https://en.wikipedia.org/wiki/Directory_traversal_attack
  // e.g curl --path-as-is http://localhost:9000/../fileInDanger.txt
  // by limiting the path to current directory only
  const sanitizePath = path.normalize(req.url.split('?').shift()).replace(/^(\.\.[/\\])+/, '')
  let pathname = path.join(__dirname, 'build', sanitizePath)

  // if !exist || is a directory, then look for ./build/index.html
  const exist = fs.existsSync(pathname)
  if (!exist || fs.statSync(pathname).isDirectory()) {
    pathname = path.join(__dirname, 'build', 'index.html')
  }

  // read file from file system
  try {
    const data = fs.readFileSync(pathname, { encoding: 'utf-8' })
    // based on the URL path, extract the file extention. e.g. .js, .doc, ...
    const ext = path.parse(pathname).ext
    // if the file is found, set Content-Type and send data
    res.setHeader('Content-Type', mimeType[ext] || 'text/plain')
    res.setHeader('Content-Length', data.length)
    return res.end(data)
  } catch (error) {
    res.statusCode = 500
    return res.end(`Error getting the file: ${error.message}.`)
  }
}).listen(parseInt(port))

console.log(`Server listening on port: ${port}`)
