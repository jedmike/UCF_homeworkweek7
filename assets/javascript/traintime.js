// alert("ALLGOOD");

var tranEnt = ["trainName", "dest", "freQ", "firstTT"];
// console.log(tranEnt);

// Your web app's Firebase configuration
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
console.log("BB")
    // database.ref().push({

//submit new train dat
$("enter").on("click", function(event) {
    event.preventDefault();
    console.log(event)

    var trNam = 1;
    var trdest = 2;
    var trfreq = 3;
    var trfirstT = 4;

    // var trNam = $("#train-Name").val().trim();
    // var trdest = $("#dest-input").val().trim();
    // var trfreq = $("#frequency-input").val();
    // var trfirstT = $("#frsttime-input").val();
    console.log("A")


    // Creates local "temporary" object for holding train data
    var newTrain = {
        name: trNam,
        destination: trdest,
        frequency: trfreq,
        firstTime: trfirstT
    };
    console.log("B")

    // Uploads employee data to the database
    database.ref().push(newTrain);
    console.log("C")

    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.freqquency);
    console.log(newTrain.firstTime);

    alert("Employee successfully added");

    // Clears all of the text-boxes
    $("#train-Name").val("");
    $("#dest-input").val("");
    $("#frequency-input").val("");
    $("#frsttime-input").val("");


});

// database.ref().on("child_added", function(childSnapshot) {
//     console.log(childSnapshot.val());

//     // Store everything into a variable.
//     var trNam = childSnapshot.val().name
//     var trdest = childSnapshot.val().destination;
//     var trfreq = childSnapshot.val().frequency;
//     var trfirstT = childSnapshot.val().firstTime;

//     // Employee Info
//     console.log(trNam);
//     console.log(trdest);
//     console.log(trfreq);
//     console.log(trfirstT);
// })

// // Prettify the employee start
// var trstarttime = moment.unix(trfirstT.format("HH:mm");

//         // Calculate the months worked using hardcore math
//         // To calculate the months worked
//         var empMonths = moment().diff(moment(empStart, "X"), "months");
//         //(time stored at emp init in Unix format, Unix format - months)
//         console.log(empMonths);

//         // Calculate the total billed rate
//         var empBilled = empMonths * empRate; console.log(empBilled);

//         // console.log("pressedoutside");
//         // console.log(trNam);