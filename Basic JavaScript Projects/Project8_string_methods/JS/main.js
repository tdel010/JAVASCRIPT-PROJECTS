function get_Concatenate() { // Concatenates the 4 parts of the sentence together and displays it in the HTML element with the id "Concatenate"
    var part_1 = "My name "; 
    var part_2 = "is Thomas, ";
    var part_3 = "and I am learning ";
    var part_4 = "coding.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); // Concatenates the 4 parts of the sentence together and stores it in the variable whole_sentence
    document.getElementById("Concatenate").innerHTML = whole_sentence; // Displays the concatenated sentence in the HTML element with the id "Concatenate"
}

function get_Slice() { // Slices the sentence from index 22 to index 25 and displays it in the HTML element with the id "Slice"
    var Sentence = "It doesn't have to be fun to be fun.";
    var Section = Sentence.slice(22, 25); // Slices the sentence from index 22 to index 25 and stores it in the variable Section
    document.getElementById("Slice").innerHTML = Section; // Displays the sliced section of the sentence in the HTML element with the id "Slice"
}

function get_UpperCase() { // Converts the string to uppercase and displays it in the HTML element with the id "UpperCase"
    var string = "This is a string.";
    var res = string.toUpperCase(); // Converts the string to uppercase and stores it in the variable res
    document.getElementById("UpperCase").innerHTML = res; // Displays the uppercase string in the HTML element with the id "UpperCase"
}

function get_Index() { // Searches the string for the word "fun" and displays the index of the first occurrence in the HTML element with the id "Index"
    let str = "Learning JavaScript is fun!";
    let position = str.search("fun"); // Searches the string for the word "fun" and stores the index of the first occurrence in the variable position
    document.getElementById("Index").innerHTML = position; // Displays the index of the first occurrence of the word "fun" in the HTML element with the id "Index"
}

function get_String() { // Converts the number to a string and displays it in the HTML element with the id "String"
    var X = "1972";
    document.getElementById("String").innerHTML = X.toString(); // Converts the number to a string and displays it in the HTML element with the id "String"
}

function get_Precision() { // Formats the number to a specified length and displays it in the HTML element with the id "Precision"
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(7); // Formats the number to a specified length of 7 and displays it in the HTML element with the id "Precision"
}

function get_Fixed() { // Formats the number to a specified number of decimal places and displays it in the HTML element with the id "Fixed"
    var num = 22/7;
    var n = num.toFixed(5); // Formats the number to a specified number of decimal places (5 in this case) and stores it in the variable n
    document.getElementById("Fixed").innerHTML = n; // Displays the number formatted to 5 decimal places in the HTML element with the id "Fixed"
}

function get_Value() { // Returns the primitive value of a string and displays it in the HTML element with the id "Value"
    var str = "Hello World!";
    var res = str.valueOf(); // Returns the primitive value of the string and stores it in the variable res
    document.getElementById("Value").innerHTML = res; // Displays the primitive value of the string in the HTML element with the id "Value"
}
