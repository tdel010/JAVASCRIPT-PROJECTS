function showMessage() {  // Starts defining a function named showMessage
    var name = "The Tech Academy."; // Declares the "name" variable
    var message = "I am learning a lot from " + name; // Declares the "message" variable and concatenates the string "I am learning a lot from " with the value of the "name" variable. 
    document.getElementById("message").innerHTML = message; // This line finds the HTML element with the id "message" and sets its innerHTML to the value of the "message" variable.
}

function myFunction() {  // Starts defining a function named myFunction
    var sentence = "I like to " // Declares the "sentence" variable
    sentence += "ride mountain bikes."; // This line uses the += operator to append the string "ride mountain bikes." to the existing value of the "sentence" variable.
    document.getElementById("Concatenate").innerHTML = sentence; // This line finds the HTML element with the id "Concatenate" and sets its innerHTML to the value of the "sentence" variable.
}