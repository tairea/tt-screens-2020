import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

// const creditsDB = firebase.initializeApp({
//     apiKey: "AIzaSyCSzIdNlnHPPe52_G5Nh4sZLt1jj0jvXh4",
//     authDomain: "credit-dashboard-2020.firebaseapp.com",
//     databaseURL: "https://credit-dashboard-2020.firebaseio.com",
//     projectId: "credit-dashboard-2020",
//     storageBucket: "credit-dashboard-2020.appspot.com",
//     messagingSenderId: "526593675939",
//     appId: "1:526593675939:web:0fe623e19ca8b79434e516",
//     measurementId: "G-0WVJTGTKM1"
// })

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyAaN0ufMG7GsWnGJMKT644DuCTDjHralc4',
    authDomain: 'tutoa-db.firebaseapp.com',
    databaseURL: 'https://tutoa-db.firebaseio.com',
    projectId: 'tutoa-db',
    storageBucket: 'tutoa-db.appspot.com',
    messagingSenderId: '831532763147'
})

// Get a Firestore instance
export const db = firebaseApp.firestore()
// Get a Storage instance
export const storage = firebaseApp.storage()