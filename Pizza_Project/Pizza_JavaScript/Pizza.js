function getReceipt() {
    // This initializes our string so it can get passed from function to function, growing line by line into a full receipt
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0; // This initializes the running total to 0 so we can add the price of each pizza size as we get to it
    var sizeTotal = 0; // This initializes the size total to 0 so we can add the price of each pizza size as we get to it
    var selectedSize = ""; // This initializes the selected size variable so we can capture the value of the selected size as we get to it
    var sizeArray = document.getElementsByClassName("size"); // This captures the array of size options as we get to it
    for (var i = 0; i < sizeArray.length; i++) { // This loops through the size array to find the one that is selected
        if (sizeArray[i].checked) { // This checks to see if the current size in the loop is selected
            var selectedSize = sizeArray[i].value; // If the size is selected, its value is stored in the selectedSize variable
            text1 = text1 + selectedSize + "<br>"; // This adds the selected size to the text1 variable, which will be passed to each function and displayed on the receipt
        }
    }
    if (selectedSize === "Personal Pizza") { // This checks the value of selectedSize and assigns the corresponding price to sizeTotal
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; // This sets the running total equal to the size total, as the size is the first item in our receipt and the total will be built from this point on
    console.log(selectedSize + " = $" + sizeTotal + ".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    // These variables will get passed on to each function
    getMeat(runningTotal, text1);
};

function getMeat(runningTotal, text1) { // This initializes the meat total to 0 so we can add the price of each meat as we get to it
    var meatTotal = 0; // This initializes the selected meat array so we can capture the values of the selected meats as we get to them
    var selectedMeat = []; // This captures the array of meat options as we get to it
    var meatArray = document.getElementsByClassName("meats"); // This captures the array of meat options as we get to it
    for (var j = 0; j < meatArray.length; j++) { // This loops through the meat array to find the ones that are selected
        if (meatArray[j].checked) { // This checks to see if the current meat in the loop is selected
            selectedMeat.push(meatArray[j].value); // If the meat is selected, its value is added to the selectedMeat array
            console.log("selected meat item: (" + meatArray[j].value + ")"); // This logs the value of the selected meat to the console
            text1 = text1 + meatArray[j].value + "<br>"; // This adds the selected meat to the text1 variable, which will be passed to each function and displayed on the receipt
        }
    }
    var meatCount = selectedMeat.length; // This counts the number of selected meats
    if (meatCount > 1) { // This checks to see if there are more than 1 selected meats
        meatTotal = (meatCount - 1); // If there are more than 1 selected meats, the total price is the number of meats minus 1, because the first meat is free
    } else {
        meatTotal = 0; // If there is 1 or less selected meats, the total price is 0 because the first meat is free
    }  
    runningTotal = (runningTotal + meatTotal); // This adds the meat total to the running total
    console.log("total selected meat items: " + meatCount); // This logs the total number of selected meats to the console
    console.log(meatCount + " meat - 1 free meat = $" + meatTotal + ".00"); // This logs the price of the selected meats to the console
    console.log("meat text1: " + text1); // This logs the text1 variable, which holds the receipt text, to the console
    console.log("subtotal after meats: $" + runningTotal + ".00"); // This logs the new subtotal after adding the meat total to the console
    getVeggies(runningTotal, text1); // This calls the getVeggies function and passes the running total and text1 variables to it, which will allow the getVeggies function to continue building the receipt and calculating the total price based on the selected veggies
};

function getVeggies(runningTotal, text1) { // This initializes the veggie total to 0 so we can add the price of each veggie as we get to it. This function works pretty much the same as the getMeat function, but it is for veggies instead of meats. 
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var k = 0; k < veggieArray.length; k++) {
        if (veggieArray[k].checked) {
            selectedVeggie.push(veggieArray[k].value);
            console.log("selected veggie item: (" + veggieArray[k].value + ")");
            text1 = text1 + veggieArray[k].value + "<br>";
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) { // This checks to see if there are more than 1 selected veggies. I'm assuming that the first veggie is free, just like the first meat.
        veggieTotal = (veggieCount - 1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal); // This adds the veggie total to the running total
    console.log("total selected veggie items: " + veggieCount); // This logs the total number of selected veggies to the console
    console.log(veggieCount + " veggie - 1 free veggie = $" + veggieTotal + ".00"); // This logs the price of the selected veggies to the console
    console.log("veggie text1: " + text1); // This logs the text1 variable, which holds the receipt text, to the console
    console.log("Purchase Total: $" + runningTotal + ".00"); // This logs the final total price of the pizza to the console
    document.getElementById("showText").innerHTML = text1; // This takes the text1 variable, which holds the receipt text, and displays it in the HTML element with the id of "showText"
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$" + runningTotal + ".00" + "</strong></h3>"; // This takes the runningTotal variable, which holds the final total price of the pizza, and displays it in the HTML element with the id of "totalPrice"
};

