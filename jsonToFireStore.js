// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

// console.log("HELLO")

// // Initialize Cloud Firestore through Firebase
// firebase.initializeApp({
//   apiKey: "AIzaSyAs224jC8EDyQ9oCBvMAAqsKZCMTh9F_i8",
//   authDomain: "mygainz2022.firebaseapp.com",
//   projectId: "mygainz2022"
// });

// var db = firebase.firestore();

// const exercises = require('./mygainz/src/data/exercises.json');

var admin = require("firebase-admin");

var serviceAccount = require("./mygainz2022-firebase-adminsdk-ckicb-719a28bd03.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const exercises = require('./mygainz/src/data/exercises.json');

const collectionRef = db.collection('exercises');

// async function test() {
//   const snapshot = await collectionRef.get();

//   // Get the number of documents in the collection
//   const numDocuments = snapshot.size;
//   console.log(numDocuments);
// }

// test();

exercises.forEach(function (obj) {
  db.collection("exercises").add({
    id: obj.id,
    name: obj.name,
    target: obj.target,
    bodyPart: obj.bodyPart,
    equipment: obj.equipment,
    gifUrl: obj.gifUrl
  }).then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
  })
    .catch(function (error) {
      console.error("Error adding document: ", error);
    });
});