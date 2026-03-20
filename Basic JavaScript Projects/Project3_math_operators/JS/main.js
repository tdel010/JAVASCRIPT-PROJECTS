function addNumbers() { // Addition
    var addition = 1972 + 53; // Addition operator
    document.getElementById("Math").innerHTML = "1972 + 53 = " + addition; // Display result
}

function subtractNumbers() { // Subtraction
    var subtraction = 2034 -1972; // Subtraction operator   
    document.getElementById("MathB").innerHTML = "2034 - 1972 = " + subtraction; // Display result
}

function multiplyNumbers() { // Multiplication
    var multiplication = 53 * 52; // Multiplication operator
    document.getElementById("MathC").innerHTML = "53 * 52 = " + multiplication; // Display result
}

function divideNumbers() { // Division
    var division = 22 / 7;
    document.getElementById("MathD").innerHTML = "22 / 7 = " + division; // Display result
}

function mixedOperators() { // Multiple operators
    var mixed = (5 + 3) * 2 - 4 / 2; // Multiple operators
    document.getElementById("MathE").innerHTML = "(5 + 3) * 2 - 4 / 2 = " + mixed; // Display result
}   

function modulusOperator() { // Modulus operator
    var modulus = 10 % 3; // Modulus operator
    document.getElementById("MathF").innerHTML = "10 % 3 = " + modulus; // Display result
}

function negationOperator() { // Negation operator
    var y = 27; // Variable to negate
    document.getElementById("MathG").innerHTML = "The negation of 27 is " + -y; // Display result
}

function incrementOperator() { // Increment operator
    var z = 5; // Variable to increment
    z++; // Increment operator
    document.getElementById("MathH").innerHTML = "After incrementing, 5 becomes " + z; // Display result
}

function decrementOperator() { // Decrement operator
    var a = 10; // Variable to decrement
    a--; // Decrement operator
    document.getElementById("MathI").innerHTML = "After decrementing, 10 becomes " + a; // Display result
}

function randomNumber() { // Random number generation
    var randomNum = Math.random() * 100; // Generate random number between 0 and 100
    document.getElementById("MathJ").innerHTML = "A random number between 0 and 100 is: " + randomNum; // Display result
}   

function squareRoot() { // Square root calculation
    var sqrt = Math.sqrt(64); // Calculate square root of 64
    document.getElementById("MathK").innerHTML = "The square root of 64 is: " + sqrt; // Display result
}