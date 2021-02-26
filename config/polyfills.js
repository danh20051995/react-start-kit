'use strict'

import './es5'
import 'core-js'
import 'formdata-polyfill'

// if (typeof Promise === 'undefined') {
//   // Rejection tracking prevents a common issue where React gets into an
//   // inconsistent state due to an error, but it gets swallowed by a Promise,
//   // and the user has no idea what causes React's erratic future behavior.
//   require('promise/lib/rejection-tracking').enable();
//   window.Promise = require('promise/lib/es6-extensions.js');
// }

if (typeof Promise.allSettled !== 'function') {
  Promise.allSettled = require('promise.allsettled')
}

// // fetch() polyfill for making API calls.
// // require('whatwg-fetch');

// // Object.assign() is commonly used with React.
// // It will use the native implementation if it's present and isn't buggy.
// if (typeof Object.assign !== 'function') {
//   Object.assign = require('object-assign');
// }
