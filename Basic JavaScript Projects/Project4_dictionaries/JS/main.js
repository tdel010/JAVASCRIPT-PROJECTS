function bike_dictionary() { // Creates a dictionary with properties of a bike 
    var bike = {
        make: "Honda",
        model: "CB500x",
        color: "white",
        year: 2014,
        type: "adventure"
    };

    delete bike.model; // Deletes a  property from the bike dictionary
   
    document.getElementById ("Dictionary").innerHTML = bike.model;  //Tries to display the delted property
}
