# react-start-kit

> A react project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:<port> | config .env REACT_APP_PORT default 8080
npm run start

# start firebase functions|backend API with nodejs
npm run start:api

# build for production with minification
npm run build

# run tests
npm test

# test build bundle with local firebase static hosting
firebase serve --only hosting

# start firebase functions and hosting
firebase serve --port 3000 --only functions,hosting

# deploy build bundle to firebase static hosting
firebase deploy --only hosting -m "release"

# deploy functions to firebase hosting
firebase deploy --only functions -m "release"

# firebase deploy all
firebase deploy -m "release"
```

## Environment variables [(dotenv)](https://www.npmjs.com/package/dotenv)

Copy [.env.example](https://github.com/danh20051995/react-start-kit/blob/master/.env.example)
`cp .env.example .env`

## Work space

``` bash
└── .firebase       # firebase hosting cache
└── .vscode         # vscode editor config
└── functions       # firebase functions
└── src
    ├── index.js    # main app
    ├── App.js      # main app component
    ├── components  # atom component
    ├── constants   # app constant variables
    ├── i18n        # setup and load i18n multiple languages
    ├── layout      # app layout components
    ├── style       # global - helper style
    ├── route       # app routes
    ├── store       # app redux-store
    ├── util        # utility functions
    ├── module      # app modules
    │   ├── core    # core module
    │   │   ├── components  # app simple component (home, 404, 403)
    │   │   ├── route.js    # register react-router
    │   │   └── service.js  # abstractions for making API requests
    │   │
    │   ├── todo    # todo module [demo] [API]
    │   │   ├── components  # module components
    │   │   ├── route.js    # module router
    │   │   └── service.js  # module service
    │   │
    │   ├── test    # test module [demo] [!API]
    │   │   ├── components  # module components
    │   │   ├── route.js    # module router
    │   │   └── service.js  # module service
    │   │
    │   └── ...
    │
```

### Util plugins:
|     Plugin          |     Installed location  |
|     ------------    |     -----------         |
| HTTP client | [axios](https://github.com/axios/axios) |

<!-- Todo
### Commands (run with node)

`react-start-kit` responds to the following commands:

Example: `node commander addModule --name="todo"`
|     Command          |     Description  |
|     ------------     |     -----------  |
|     ------------     |     -----------  |
|     ------------     |     -----------  | -->
