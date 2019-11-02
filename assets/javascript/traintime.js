alert("ALLGOOD");
console.log(tn);

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCoryH91NBegczmhVDYYvzAtY4JTrcNgOY",
    authDomain: "traintime-14910.firebaseapp.com",
    databaseURL: "https://traintime-14910.firebaseio.com",
    projectId: "traintime-14910",
    storageBucket: "traintime-14910.appspot.com",
    messagingSenderId: "821094807579",
    appId: "1:821094807579:web:e403629d6148f24c6da0be"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database()
database.ref().push({
    message: "Hello World"

})