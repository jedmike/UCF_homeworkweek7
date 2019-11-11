alert("ALLGOOD");
var today = new Date();
// Non moment way to get time
var currenttime = today.getHours() + ":" + today.getMinutes();
var currentHr = today.getHours();
var currentMin = today.getMinutes();
var currentTime = moment();
var initialTrTime = '';
var nextArrivalTime = "";
console.log(currentTime);
console.log(currenttime);
console.log(currentMin);
var trName = "";
var trDestination = "";
var trFrequency = "";
var trFistTrainTOD = "";
var lastArrived = "";
var minAway = "";
var swap = "";


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

    var trName = $("#trainName-input").val().trim();
    var trDestination = $("#destination-input").val().trim();
    var trFrequency = $("#frequency-input").val();
    var trFistTrainTOD = $("#firstTime-input").val()

    // Object to hole each new train entry
    var newTrain = {
        name: trName,
        destination: trDestination,
        frequency: trFrequency,
        firstTime: trFistTrainTOD
    };


    // Uploads Train data to the database
    database.ref().push(newTrain);

    // // Logs everything to console
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.frequency);
    console.log(newTrain.firstTime);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    alert("Train successfully added");
    console.loc("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
    console.log("buton clicked");
    console.loc("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");


    //  Clears all of the text-boxes
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
    var trName = childSnapshot.val().name
    var trDestination = childSnapshot.val().destination;
    var trFrequency = childSnapshot.val().frequency;
    var trFistTrainTOD = childSnapshot.val().firstTime;



    console.log("::::::::::::::::::::::::::::::::::::");
    console.log("new train name:  " + trName);
    console.log("new train destination:  " + trDestination);
    console.log("new train frequency:  " + trFrequency);
    console.log("new train starts service at:  " + trFistTrainTOD);
    console.log("::::::::::::::::::::::::::::::::::::");

    //Calculate train timint
    var initialTrTime = moment(trFistTrainTOD, "HH:mm ");
    // var nextArrivalTime = currentTime.diff(initialTrTime, "minutess");
    var nextArrivalTime = initialTrTime.diff(currentTime, "minutes");
    var lastArrived = nextArrivalTime % trFrequency;
    console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
    var minAway = trFrequency - lastArrived;
    console.log("Moment initial train time:" + initialTrTime);
    console.log("System time:" + currenttime);
    console.log("cuttern time:" + currentTime);
    console.log("initialTime =" + initialTrTime);
    console.log("nextArrivalTime = " + nextArrivalTime);
    console.log("lastArrived = " + lastArrived);
    console.log("minAwahy = " + minAway);
    console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");


    var newRow = $("<tr>").append(
        $("<td>").text(trName),
        $("<td>").text(trDestination),
        $("<td>").text(trFrequency),
        $("<td>").text(trFrequency),
        $("<td>").text(trFrequency),
    );

    // Append the new row to the table
    $("#train-table > tbody").append(newRow);



    // alert("Train successfully added");
    // console.log("buton clicked");
    // Clears all of the text-boxes
    // $("#trainName-input").val("");
    // $("#destination-input").val("");
    // $("#frequency-input").val("");
    // $("#firstTime-inputt").val("");


});