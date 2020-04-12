
const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')

const app = express()

/**
 * Allow cors all method | origin *
 */
app.use(cors())

/**
 * Handler all request
 */
app.use((request, response) => {
  return response
    .send({
      ...request.query,
      ...request.body
    })
    .end()
})

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.app = functions.https.onRequest(app)
