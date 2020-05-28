import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/storage'

firebase.initializeApp({
    apiKey: "AIzaSyAaN0ufMG7GsWnGJMKT644DuCTDjHralc4",
    authDomain: "tutoa-db.firebaseapp.com",
    databaseURL: "https://tutoa-db.firebaseio.com",
    projectId: "tutoa-db",
    storageBucket: "tutoa-db.appspot.com",
    messagingSenderId: "831532763147",
    appId: "1:831532763147:web:07e681e3341278a4",
    measurementId: "G-WS6L9EZE7N"
})

// Get a Firestore instance
export const db = firebase.firestore()
// Get a Storage instance
export const storage = firebase.storage()