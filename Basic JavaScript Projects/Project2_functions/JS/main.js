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

function getNumber() { // Starts defining a function named getNumber
    var randomNumber = Math.floor(Math.random() * 100) + 1; // Declares the "randomNumber" variable and assigns it a random number between 0 (inclusive) and 1 (exclusive) using the Math.random() method. Then, it multiplies that random number by 100 to scale it to a range of 0 to 100. Finally, it uses Math.floor() to round the number down to the nearest whole number and adds 1 to shift the range from 0-99 to 1-100.    
    document.getElementById("getNumber").innerHTML = randomNumber; // This line finds the HTML element with the id "getNumber" and sets its innerHTML to the value of the "randomNumber" variable, which will display the random number on the webpage.
}

