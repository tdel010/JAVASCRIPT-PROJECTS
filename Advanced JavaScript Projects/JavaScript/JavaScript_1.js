function get_Bike() {
    var Bike_Output;
    var Bike_Type = document.getElementById("Bike").value;  // Gets the value from an HTML input element with the id "Bike_Input" and stores it in a variable called Bike_Type
    var Bike_String = " bikes are great fun!"; // Initializes a string variable called Bike_String with a message about the chosen bike type

    switch (Bike_Type) { // Uses a switch statement to determine the message to display based on the value of Bike_Type
        case "Mountain": // If Bike_Type is "Mountain", the following code block is executed
            Bike_Output = "Mountain" + Bike_String;
            break;
        case "Road":
            Bike_Output = "Road" + Bike_String;
            break;
        case "Hybrid":
            Bike_Output = "Hybrid" + Bike_String;
            break;
        case "Electric":
            Bike_Output = "Electric" + Bike_String;
            break;
        case "Folding":
            Bike_Output = "Folding" + Bike_String;
            break;
        case "Recumbent":
            Bike_Output = "Recumbent" + Bike_String;
            break;
        case "Gravel":
            Bike_Output = "Gravel" + Bike_String;
            break;
        case "BMX":
            Bike_Output = "BMX" + Bike_String;
            break;
        default: // If none of the cases match the value of Bike_Type, the default case is executed
            Bike_Output = "Please enter a bike type exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Bike_Output; // Displays the message stored in Bike_Output in an HTML element with the id "Output"
}

function highlight_Bikes() {
    // document.getElementsByClassName() returns an HTMLCollection of ALL elements that have the class name "bike-option"
    var bikeItems = document.getElementsByClassName("bike-option");

    // Because it returns a collection (not a single element), I have to loop through it
    for (var i = 0; i < bikeItems.length; i++) {
        bikeItems[i].style.color = "green"; // Changes each list item's text colour to green
    }
}

let canvas = document.getElementById("myCanvas"); // Gets the canvas element with the id "myCanvas" and stores it in a variable called canvas
let ctx = canvas.getContext("2d"); // Gets the 2D drawing context of the canvas and stores it in a variable called ctx

const grd = ctx.createLinearGradient(0, 0, 200, 0); // Creates a linear gradient that starts at the coordinates (0, 0) and ends at (200, 0)
grd.addColorStop(0, "red"); // Adds a color stop to the gradient at position 0 with the color red
grd.addColorStop(1, "blue"); // Adds a color stop to the gradient at position 1 with the color blue
ctx.fillStyle = grd; // Sets the fill style of the drawing context to the created gradient
ctx.fillRect(10, 10, 180, 180); // Draws a filled rectangle on the canvas at the coordinates (10, 10) with a width of 180 and a height of 180 using the current fill style (the gradient)

ctx.font = "20px Arial";
ctx.fillStyle = "white";
ctx.fillText("Bikes are cool!", 30, 100); // Draws the text "Bikes are cool!" on the canvas at the coordinates (30, 100) with the specified font and fill style