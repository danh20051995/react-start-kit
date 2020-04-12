/**
 * File name: src\util\firebase.js
 * Created by Visual studio code
 * User: Danh Le / danh.danh20051995@gmail.com
 * Date: 2020-04-07 22:27:17
 */

// https://firebase.google.com/docs/web/setup#libraries-bundle
import firebase from 'firebase/app'
import 'firebase/auth'
// import 'firebase/analytics'
// import 'firebase/firestore'
// import 'firebase/functions'
// import 'firebase/messaging'
// import 'firebase/storage'
// import 'firebase/performance'
// import 'firebase/database'
// import 'firebase/remote-config'

/**
 * Initial firebase app config
 */
try {
  const firebaseConfig = JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG)
  firebase.initializeApp(firebaseConfig)
} catch (error) {
  console.error(error)
}

export default firebase
