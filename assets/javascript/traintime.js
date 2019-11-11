alert("ALLGOOD");
var today = new Date();
// Non moment way to get time
var currenttime = today.getHours() + ":" + today.getMinutes();
var currentHr = today.getHours();
var currentMin = today.getMinutes();
var currentTime = moment();
console.log(currentTime);
console.log(currenttime);
console.log(currentMin);
var trNam = "";
var trdest = "";
var trfreq = "";
var trFirstT = "";


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCoryH91NBegczmhVDYYvzAtY4JTrcNgOY",
    authDomain: "traintime-14910.firebaseapp.com",
    databaseURL: "https://traintime-14910.firebaseio.com",
    projectId: "traintime-14910",
    storageBucket: "traintime-14910.appspot.com",
    messagingSenderId: "821094807579",
    appId: "1:821094807579:web:e403629d6148f24c6da0be"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

//Add New Train data to the database

$("#addTrain-btn").on("click", function(event) {
    event.preventDefault();

    var trNam = $("#trainName-input").val().trim();
    var trdest = $("#destination-input").val().trim();
    var trfreq = $("#frequency-input").val();
    var trFirstT = $("#firstTime-input").val().trim();

    // Object to hole each new train entry
    var newTrain = {
        name: trNam,
        destination: trdest,
        frequency: trfreq,
        firstTime: trFirstT
    };


    // Uploads Train data to the database
    database.ref().push(newTrain);

    // // Logs everything to console
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    // console.log(newTrain.name);
    // console.log(newTrain.destination);
    // console.log(newTrain.freqquency);
    // console.log(newTrain.firstTime);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    // alert("Train successfully added");
    // console.log("buton clicked");
    // Clears all of the text-boxes
    // $("#trainName-input").val("");
    // $("#destination-input").val("");
    // $("#frequency-input").val("");
    // $("#firstTime-inputt").val("");


});

database.ref().on("child_added", function(childSnapshot) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(childSnapshot.val());
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

    // Store everything into a variable.
    var trNam = childSnapshot.val().name
    var trdest = childSnapshot.val().destination;
    var trfreq = childSnapshot.val().frequency;
    var trFirstT = childSnapshot.val().firstTime;



    console.log("::::::::::::::::::::::::::::::::::::");
    console.log(trNam);
    console.log(trdest);
    console.log(trfreq);
    console.log(trFirstT);
    console.log("::::::::::::::::::::::::::::::::::::");

    //Calculate train timint
    var initialTrTime = moment(trFirstT, "HH:mm ");
    console.log("::::::::::::::::::::::::::::::::::::");
    console.log(trFirstT);
    console.log("::::::::::::::::::::::::::::::::::::");
    console.log("____________________________________");
    console.log(initialTrTime);
    console.log("____________________________________");
})