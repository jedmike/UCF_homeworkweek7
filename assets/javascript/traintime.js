alert("ALLGOOD");
var today = new Date();
var currenttime = today.getHours() + ":" + today.getMinutes();
var currentHr = today.getHours();
var currentMin = today.getMinutes();
var currentTime = moment();
console.log(currentTime);
var trNam = "";
var trdest = "";
var trfreq = "";
var trfirstT = "";

console.log(currenttime);
console.log(currentHr);
console.log(currentMin);
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
// database.ref().push("Hello");
// console.log("111111111111111")
//submit new train dat
$("#addTrain-btn").on("click", function(event) {
    event.preventDefault();

    var trNam = $("#trainName-input").val().trim();
    var trdest = $("#destination-input").val().trim();
    var trfreq = $("#frequency-input").val();
    var trfirstT = $("#firstTime-input").val();


    // Creates local "temporary" object for holding train data
    var newTrain = {
        name: trNam,
        destination: trdest,
        frequency: trfreq,
        firstTime: trfirstT
    };


    // Uploads employee data to the database
    database.ref().push(newTrain);

    // Logs everything to console
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.freqquency);
    console.log(newTrain.firstTime);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    alert("Train successfully added");
    console.log("buton clicked");
    // Clears all of the text-boxes
    $("#trainName-input").val("");
    $("#destination-input").val("");
    $("#frequency-input").val("");
    $("#firstTime-inputt").val("");


});

database.ref().on("child_added", function(childSnapshot) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(childSnapshot.val());
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");

    // Store everything into a variable.
    var trNam = childSnapshot.val().name
    var trdest = childSnapshot.val().destination;
    var trfreq = childSnapshot.val().frequency;
    var trfirstT = childSnapshot.val().firstTime;


    console.log("::::::::::::::::::::::::::::::::::::");
    console.log(trNam);
    console.log(trdest);
    console.log(trfreq);
    console.log(trfirstT);
    console.log("::::::::::::::::::::::::::::::::::::");
})




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