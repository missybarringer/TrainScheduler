  // Create a Realtime Firebase database in test mode with R/W access
  // Create a card for the dynamic train schedule table
  // Create a card for the new train entry form
  // Create a button for adding new trains - then update the html & database
  // Retrieve the new trains from the database and show in schedule table
  // Calculate when the next train will arrive relative to the current time
  // Make sure users from different machines can view the same train times
  // added to portfolio at https://missybarringer.github.io/
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9HmXPJtT6Orcg4wBYgu9Z9YJu_wUHYFI",
    authDomain: "trainscheduler-2d729.firebaseapp.com",
    databaseURL: "https://trainscheduler-2d729.firebaseio.com",
    projectId: "trainscheduler-2d729",
    storageBucket: "trainscheduler-2d729.appspot.com",
  };

  firebase.initializeApp(config);

  var database = firebase.database();
  // button for adding trains to the schedule
  $("#add-train-btn").on("click", function() {
      event.preventDefault();

      // getting user input
      var trainName = $("#train-name-input").val().trim();
      var trainDestination = $("#destination-input").val().trim();
      var trainFirstTime = $("#first-time-input").val().trim();
      var trainFrequency = $("#frequency-input").val().trim();

      // creates the local "temporary" object for holding the train data
      var newTrain = {
          name: trainName,
          destination: trainDestination,
          firstTime: trainFirstTime,
          frequency: trainFrequency
      };
      // uploads the train data to the database
      database.ref().push(newTrain);

      alert("Your train has been added!");

      // clears all of the text boxes
      $("#train-name-input").val("");
      $("#destination-input").val("");
      $("#first-time-input").val("");
      $("#frequency-input").val("");
});

// create Firebase event for adding employee to the database and a row in the html when user adds a train & submits
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    // store everything into a variable
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var trainFirstTime = childSnapshot.val().firstTime;
    var trainFrequency = childSnapshot.val().frequency;
    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(trainFirstTime, "HH:mm").subtract(1, "years");
    // difference between times
    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // time apart (remainder)
    var tRemainder = diffTime % trainFrequency;
    //minutes til train
    var minAway = trainFrequency - tRemainder;
    // next train with formatting
    var nextTArrival = moment().add(minAway, "minutes");
    var nextTrainArrival = moment(nextTArrival).format("hh:mm");
    console.log(tRemainder);
    //create the new row
    var newRow = $("<tr>").append(
        $("<td>").text(trainName),
        $("<td>").text(trainDestination),
        $("<td>").text(trainFrequency),
        $("<td>").text(nextTrainArrival),
        $("<td>").text(minAway)
    );
    // append the new row to the table
    $("#train-table > tbody").append(newRow);

});
