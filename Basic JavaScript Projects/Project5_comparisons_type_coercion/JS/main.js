var bikeDisplacement = "500";  // This is a string, not a number.
document.write(typeof bikeDisplacement); // This will output "string" because bikeDisplacement is a string.
document.write("<br>"); // This adds a line break in the HTML output.
document.write(bikeDisplacement + 10); // This will output "50010" because the + operator concatenates the string "500" with the number 10, treating 10 as a string.

function numberOrNot() {  // This function will NaN.
    document.getElementById("Number").innerHTML = 0 / 0;
}

function numberOrNot1() { // This function will output Infinity.
    document.getElementById("Number2").innerHTML = 1 / 0;
}

function numberOrNot2() { // This function will output -Infinity.
    document.getElementById("Number3").innerHTML = -1 / 0;
}

function trueOrNot1() { // This function will output true because 'Hello' is not a number, so isNaN returns true.
    document.getElementById("result1").innerHTML = isNaN('Hello');
}

function trueOrNot2() { // This function will output false because '123' is a numeric string, so isNaN returns false.
    document.getElementById("result2").innerHTML = isNaN('123');
}

var x = 10;
function trueOrNot3() { // This function will output true because x is equal to 10, so the comparison x == 10 returns true.
    document.getElementById("result3").innerHTML = x == 10;
}

function trueOrNot4() { // This function will output false because x is not equal to 5, so the comparison x == 5 returns false.
    document.getElementById("result4").innerHTML = x == 5;
}

console.log(2 + 2); // These next few lines will output the results of various operations to the console for debugging purposes.
console.log("2" + "2");
console.log("Hello");
console.log(10 > 20);
console.log(10 < 20);

function trueOrNot5() { // This function will output true because 10 is equal to 10
    document.getElementById("result5").innerHTML = 10 == 10;
}

function trueOrNot6() { // This function will output false because 10 is not equal to 5
    document.getElementById("result6").innerHTML = 10 == 5;
}

var y = 10;
var z = 10;
function trueOrNot7() {  // This function will output true because y and z are both equal to 10 and both are of the same type (number)
    document.getElementById("result7").innerHTML = y === z;
}

function trueOrNot8() { // This function will output false because y is a number (10) and "100" is a string, so they are not strictly equal.
    document.getElementById("result8").innerHTML = y === "100";
}

function trueOrNot9() { // This function will output false because 0 is a number and "0" is a string, so they are not strictly equal.
    document.getElementById("result9").innerHTML = 0 === "0";
}

function trueOrNot10() { // This function will output false because z is a number (10) and 428 is a number, but they are not equal in value, so the strict equality comparison returns false.
    document.getElementById("result10").innerHTML = z === 428;
}

function trueOrNot11() { // This function will output true because both comparisons (2 > 1 and 10 > 5) are true, so the logical AND operator (&&) returns true.
    document.getElementById("result11").innerHTML = (2 > 1 && 10 > 5);
}

function trueOrNot12() { // This function will output false because while the first comparison (2 > 1) is true, the second comparison (10 < 5) is false, so the logical AND operator (&&) returns false.
    document.getElementById("result12").innerHTML = (2 > 1 && 10 < 5);
}

function trueOrNot13() { // This function will output true because the first comparison (2 > 1) is true, so the logical OR operator (||) returns true regardless of the second comparison (10 < 5) being false.
    document.getElementById("result13").innerHTML = (2 > 1 || 10 < 5);
}

function trueOrNot14() { // This function will output false because both comparisons (2 < 1 and 10 < 5) are false, so the logical OR operator (||) returns false.
    document.getElementById("result14").innerHTML = (2 < 1 || 10 < 5);
}

function Not() { // This function will output false because the expression (20 > 10) is true, and the logical NOT operator (!) negates it to false.
    document.getElementById("result15").innerHTML = !(20 > 10);
}

function Not1() { // This function will output true because the expression (20 < 10) is false, and the logical NOT operator (!) negates it to true.
    document.getElementById("result16").innerHTML = !(20 < 10);
}
