var Y = 53 // Global variable
function timesTwo() {
    document.write(Y * 2); // Accessing the global variable Y
}
function timesThree() { // Accessing the global variable Y
    document.write(Y * 3);
}
timesTwo(); // Calling the function to multiply Y by 2
timesThree(); // Calling the function to multiply Y by 3

function addTwo() { // Local variable z
    var z = 53
    document.write(z + 2); // Accessing the local variable z
}
function addThree() { // Mistaken attempt to access local variable z from addTwo()
    console.log(z + 3); // This will cause an error because z is not defined in this scope
}
addTwo(); // Calling the function to add 2 to z
addThree(); // Calling the function to add 3 to z, but it will cause an error due to scope issues

function get_Hour() { // Function to determine the greeting based on the current hour
    const hour = new Date().getHours(); // Local variable hour to store the current hour

    if (hour < 12) { // Checking if the hour is less than 12
        document.getElementById("Greeting").innerHTML = "Good Morning!"; // Displaying "Good Morning!" if the condition is true
    } else if (hour < 18) {
        document.getElementById("Greeting").innerHTML = "Good Afternoon!"; // Displaying "Good Afternoon!" if the hour is between 12 and 18
    } else {
        document.getElementById("Greeting").innerHTML = "Good Evening!"; // Displaying "Good Evening!" if the hour is 18 or greater
    }
}

function get_Age() { // Function to determine if the user is eligible for a senior meal discount based on their age
    var Age = document.getElementById("Age").value; // Getting the value of the input field with id "Age" and storing it in the local variable Age
    if (Age >= 65) { // Checking if the age is 65 or greater
        senior_meal = "You are eligible for a senior meal discount!";
    } else {
        senior_meal = "You are not eligible for a senior meal discount.";
    } // Displaying the appropriate message based on the age condition
    document.getElementById("Meal").innerHTML = senior_meal; // Updating the innerHTML of the element with id "Meal" to show the result
} 