function Ride_Function() { //Function to determine if the user is tall enough to ride.
    var Height, Can_ride; //Variables used to store the user's height and the message that will be displayed.
    Height = document.getElementById("Height").value; //Gets the user's height from the input field.
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; //Ternary operator used to determine if the user is tall enough to ride.
    document.getElementById("Ride").innerHTML = Can_ride + " to ride."; //Displays the message to the user.
}

function Vote_Function() { //Function to determine if the user is old enough to vote.
    var Age, Can_vote; //Variables used to store the user's age and the message that will be displayed.
    Age = document.getElementById("Age").value; //Gets the user's age from the input field.
    Can_vote = (Age < 18) ? "You are not old enough" : "You are old enough"; //Ternary operator used to determine if the user is old enough to vote.
    document.getElementById("Vote").innerHTML = Can_vote + " to vote."; //Displays the message to the user.
}

function Vehicle(Make, Model, Year, Color) { //Constructor function to create a Vehicle object.
    this.Vehicle_Make = Make; //Properties of the Vehicle object.
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //Creating new Vehicle objects using the constructor function.
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //Function to display the properties of the Erik object.
    document.getElementById("Keywords_and_Constructors").innerHTML = //Displays the message to the user using the properties of the Erik object.
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
        " manufactured in " + Erik.Vehicle_Year;
}

function Bike(Make, Model, Year, Color) { //Constructor function to create a Bike object.
    this.Bike_Make = Make; //Properties of the Bike object.
    this.Bike_Model = Model;
    this.Bike_Year = Year;
    this.Bike_Color = Color;
}
var Tom = new Bike("Honda", "Shadow", 2019, "Black"); //Creating new Bike objects using the constructor function.
var Pete = new Bike("Harley Davidson", "Street 750", 2020, "Red");
var Eli = new Bike("Yamaha", "V Star", 2018, "Blue");
function newFunction() { //Function to display the properties of the Tom object.
    document.getElementById("New_and_This").innerHTML = //Displays the message to the user using the properties of the Tom object.
        "Tom rides a " + Tom.Bike_Color + " " + Tom.Bike_Make + " " + Tom.Bike_Model +
        " manufactured in " + Tom.Bike_Year + ".";
}

function jitensha(Make, Model, Year, Color) { //Constructor function to create a jitensha object.
    this.jitensha_Make = Make; //Properties of the jitensha object.
    this.jitensha_Model = Model;
    this.jitensha_Year = Year;
    this.jitensha_Color = Color;
}

var chari = new jitensha("Giant", "Defy", 2021, "Green"); //Creating new jitensha objects using the constructor function.
var casey = new jitensha("Trek", "Domane", 2020, "Red");
var charlie = new jitensha("Specialized", "Roubaix", 2019, "Blue");
function newFunction2() { //Function to display the properties of the charlie object.
    document.getElementById("New_and_This2").innerHTML = //Displays the message to the user using the properties of the charlie object.
        "Charlie rides a " + charlie.jitensha_Color + " " + charlie.jitensha_Make + " " + charlie.jitensha_Model +
        " manufactured in " + charlie.jitensha_Year + ".";
}

function nested_Function() { //Function to demonstrate a nested function.
    document.getElementById("nested_Function").innerHTML = addFive(); //Calls the addFive function and displays the result to the user.
    let start = 5; //Variable used to store the starting value for the nested function.
    function addFive() { //Nested function that adds five to the starting value.
        var start = 5;
        function plusFive() { start += 5; }
        plusFive();
        return start; //Returns the result of the nested function to the outer function.
    }
}
