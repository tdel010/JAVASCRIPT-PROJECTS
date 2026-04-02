function bike_dictionary() { // Creates a dictionary with properties of a bike 
    var bike = {
        make: "Specialized",
        model: "Turbo Levo",
        color: "white",
        year: 2014,
        type: "adventure"
    };

    var message = "My favorite bike brand is " + bike.make;
   
    document.getElementById ("Dictionary").innerHTML = message;
}
