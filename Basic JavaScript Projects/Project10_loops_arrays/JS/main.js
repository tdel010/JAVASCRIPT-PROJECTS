function Call_Loop() { // Creates a loop that counts from 0 to 100 in increments of 5
    var Digit = ""; // Initializes an empty string to store the digits
    var X = 0; // Initializes a variable to keep track of the current digit
    while (X < 101) { // Sets the condition for the loop to run as long as X is less than 101
        Digit += "<br>" + X; // Adds the current value of X to the string, followed by a line break
        X += 5; // Increments X by 5 for the next iteration of the loop
    }

    document.getElementById("Loop").innerHTML = Digit; // Displays the final string of digits in the HTML element with the id "Loop"
}


function get_Length() { // Creates a function that returns the length of a string and displays it in an HTML element
    var str = "Now is the time for all good people to come to the aid of their country."; // Initializes a string variable with a sentence

    var n = str.length; // Uses the length property of the string to get the number of characters in the string and stores it in a variable n
    document.getElementById("string_Length").innerHTML = n; // Displays the value of n in the HTML element with the id "string_Length"
}


var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // Initializes an array called Instruments with a list of musical instruments
var Content = ""; // Initializes an empty string variable called Content to store the list of instruments
var Y; // Initializes a variable Y to be used as a counter in the for loop
function for_Loop() { // Creates a function that uses a for loop to iterate through the Instruments array and display each instrument in an HTML element
    for (Y = 0; Y < Instruments.length; Y++) { // Sets up a for loop that starts with Y at 0, continues as long as Y is less than the length of the Instruments array, and increments Y by 1 in each iteration
        Content += Instruments[Y] + "<br>"; // Adds the current instrument from the Instruments array (using Y as the index) to the Content string, followed by a line break
    }
    document.getElementById("List_of_Instruments").innerHTML = Content; // Displays the final list of instruments in the HTML element with the id "List_of_Instruments"
}

function bike_Function() { // Creates a function that initializes an array with bike brands and displays one of the brands in an HTML element
    var Bike = []; // Initializes an empty array called Bike
    Bike[0] = "Trek"; // Assigns the string "Trek" to the first element of the Bike array (index 0)
    Bike[1] = "Specialized";
    Bike[2] = "Giant";
    Bike[3] = "Santa Cruz";
    document.getElementById("Array").innerHTML = "My favorite bike brand is " + Bike[1]; // Displays the second element of the Bike array (index 1) in the HTML element with the id "Array"
}

function constant_function() { // Creates a function that initializes a constant object and displays its properties in an HTML element
    const Bicycle = {type:"mountain bike",       brand:"Specialized", color:"black"}; //1
    Bicycle.color = "red"; // Modifies the color property of the Bicycle object to "red"
    Bicycle.price = "$3200"; // Adds a new property called price to the Bicycle object and assigns it the value "$3200"
    document.getElementById("Constant").innerHTML = "The cost of the " + Bicycle.brand + " " + Bicycle.type + " was " + Bicycle.price; // Displays a message in the HTML element with the id "Constant" that includes the brand, type, and price properties of the Bicycle object
}

function myFunction(brand) { // Creates a function that takes a parameter called brand and returns a string that includes the value of the brand parameter
    return "My favorite bike is a " + brand + ".";
}

function show_Return() { // Creates a function that calls the myFunction with a specific brand and displays the returned string in an HTML element
    document.getElementById("Return").innerHTML = myFunction("Specialized");
}

let bike = { // Initializes an object called bike with properties and a method
    make: "YT",
    model: "Decoy",
    year: "2024",
    color: "green",
    description : function() { // Defines a method called description that returns a string describing the bike using its properties
        return "The bike is a " + this.year + " " + this.make + " " + this.model + " in " + this.color + ".";
    }
};

document.getElementById("Bike_Object").innerHTML = bike.description();   // Calls the description method of the bike object and displays the returned string in the HTML element with the id "Bike_Object"

let text = ""; // Initializes an empty string variable called text to store the output of the loop
for (let t = 0; t < 20; t++) { // Sets up a for loop that starts with t at 0, continues as long as t is less than 20, and increments t by 1 in each iteration
    if (t === 3) { continue; } // If t is equal to 3, the continue statement skips the rest of the loop body for that iteration and moves to the next iteration
    if (t === 15) { break; } // If t is equal to 15, the break statement exits the loop entirely, so the loop will stop running once t reaches 15
    text += "The number is " + t + "<br>"; // If neither of the above conditions are met, this line adds a string that includes the current value of t to the text variable, followed by a line break
}
document.getElementById("Break").innerHTML = text; // Displays the final value of text in the HTML element with the id "Break", which will include the numbers from 0 to 19 except for 3, and will stop at 14 due to the break statement when t reaches 15

