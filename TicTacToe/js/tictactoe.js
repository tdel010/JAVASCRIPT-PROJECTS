let activePlayer = "X"; // Initializes the active player to "X"
let selectedSquares = []; // Initializes an empty array to keep track of selected squares and to determine win conditions.
let gameOver = false;

function placeXOrO(squareNumber) { // This function is responsible for placing an "X" or "O" in the square that the user clicks on.
    if (gameOver) {
        return false;
    }

    if (!selectedSquares.some(element => element.includes(squareNumber))) { // Checks if the square has already been selected by checking if the squareNumber is included in any of the elements in the selectedSquares array. If it has not been selected, the function continues.
        let select = document.getElementById(squareNumber); // Retrieves the HTML element with the id that matches the squareNumber and assigns it to the variable "select".
        if (activePlayer === "X") { // Checks if the active player is "X". If it is, it sets the background image of the selected square to an "X" image.
            select.style.backgroundImage = 'url("images/x2.png")'; // Sets the background image of the selected square to an "X" image.
        } else {
            select.style.backgroundImage = 'url("images/O2.png")'; // If the active player is not "X", it sets the background image of the selected square to an "O" image.
        }
        selectedSquares.push(squareNumber + activePlayer); // Adds the squareNumber and activePlayer to the selectedSquares array in the format "squareNumberactivePlayer" (e.g., "0X", "1O", etc.) to keep track of which squares have been selected by which player.
        if (typeof audio === "function") {
            audio("./media/move2.mp3"); // Plays a sound effect when an "X" or "O" is placed on the board.
        }

        let gameResult = null;
        if (typeof checkWinConditions === "function") {
            gameResult = checkWinConditions(); // Calls the function to check if there is a winner after placing an "X" or "O".
        }

        if (gameResult === "win") {
            gameOver = true;
            if (typeof audio === "function") {
                audio("./media/win2.mp3");
            }
            return true;
        }

        if (gameResult === "tie") {
            gameOver = true;
            if (typeof audio === "function") {
                audio("./media/tie2.mp3");
            }
            if (typeof disableClick === "function") {
                disableClick();
            }
            setTimeout(function () { resetGame(); }, 1000);
            return true;
        }

        if (activePlayer === "X") { // Switches the active player from "X" to "O" after placing an "X".
            activePlayer = "O"; // Sets the active player to "O".
        } else {
            activePlayer = "X"; // Switches the active player from "O" to "X" after placing an "O".
        }
        if (activePlayer === "O") { // If the active player is "O", it calls the function to make the computer's turn after a short delay.
            if (typeof disableClick === "function") {
                disableClick(); // Disables clicking on the board while the computer is making its move.
            }
            setTimeout(function () { computersTurn(); }, 1000); // Sets a timeout to call the computersTurn function after 1 second (1000 milliseconds) to allow the computer to make its move.
        }
        return true; // Returns true to indicate that the move was successfully made.
    }
}

function computersTurn() { // This function is responsible for the computer's turn to place an "O" on the board.
    let success = false; // Initializes a variable "success" to false to keep track of whether the computer has successfully placed an "O" on the board.
    let pickASquare; // Initializes a variable "pickASquare" to store the randomly selected square number for the computer's move.
    while (!success) { // Continues to loop until the computer successfully places an "O" on the board.
        pickASquare = String(Math.floor(Math.random() * 9)); // Generates a random number between 0 and 8 (inclusive) and converts it to a string to represent the square number that the computer will attempt to place an "O" in.
        if (placeXOrO(pickASquare)) { // Calls the placeXOrO function with the randomly selected square number. If the function returns true, it means the computer successfully placed an "O" in that square.
            success = true; // Sets the success variable to true to exit the loop since the computer has successfully made its move.
        }
    }
}

function audio(audioURL) { // This function is responsible for playing sound effects in the game. It takes an audioURL as a parameter, which is the path to the audio file that should be played.
    const sound = new Audio(audioURL);
    sound.play().catch(function () {
        // Ignore autoplay-related rejections if the browser blocks playback.
    });
}

function checkWinConditions() {
    if (arrayIncludes("0X", "1X", "2X")) { drawWinLine(50, 100, 558, 100); return "win"; } // X 0, 1, 2 condition.
    else if (arrayIncludes("3X", "4X", "5X")) { drawWinLine(50, 304, 558, 304); return "win"; } // X 3, 4, 5 condition.
    else if (arrayIncludes("6X", "7X", "8X")) { drawWinLine(50, 508, 558, 508); return "win"; } // X 6, 7, 8 condition.
    else if (arrayIncludes("0X", "3X", "6X")) { drawWinLine(100, 50, 100, 558); return "win"; } // X 0, 3, 6 condition.
    else if (arrayIncludes("1X", "4X", "7X")) { drawWinLine(304, 50, 304, 558); return "win"; } // X 1, 4, 7 condition.
    else if (arrayIncludes("2X", "5X", "8X")) { drawWinLine(508, 50, 508, 558); return "win"; } // X 2, 5, 8 condition.
    else if (arrayIncludes("0X", "4X", "8X")) { drawWinLine(50, 50, 558, 558); return "win"; } // X 0, 4, 8 condition.
    else if (arrayIncludes("6X", "4X", "2X")) { drawWinLine(50, 558, 558, 50); return "win"; } // X 6, 4, 2 condition.
    else if (arrayIncludes("0O", "1O", "2O")) { drawWinLine(50, 100, 558, 100); return "win"; } // O 0, 1, 2 condition.
    else if (arrayIncludes("3O", "4O", "5O")) { drawWinLine(50, 304, 558, 304); return "win"; } // O 3, 4, 5 condition.
    else if (arrayIncludes("6O", "7O", "8O")) { drawWinLine(50, 508, 558, 508); return "win"; } // O 6, 7, 8 condition.
    else if (arrayIncludes("0O", "3O", "6O")) { drawWinLine(100, 50, 100, 558); return "win"; } // O 0, 3, 6 condition.
    else if (arrayIncludes("1O", "4O", "7O")) { drawWinLine(304, 50, 304, 558); return "win"; } // O 1, 4, 7 condition.
    else if (arrayIncludes("2O", "5O", "8O")) { drawWinLine(508, 50, 508, 558); return "win"; } // O 2, 5, 8 condition.
    else if (arrayIncludes("0O", "4O", "8O")) { drawWinLine(50, 50, 558, 558); return "win"; } // O 0, 4, 8 condition.
    else if (arrayIncludes("6O", "4O", "2O")) { drawWinLine(50, 558, 558, 50); return "win"; } // O 6, 4, 2 condition.
    else if (selectedSquares.length >= 9) { // Checks for a tie condition by verifying if all squares have been selected (i.e., the length of selectedSquares is 9 or more) and there is no winner.
        return "tie";
    }

    return null;

    function arrayIncludes(squareA, squareB, squareC) { // This function checks if the three specified squares (squareA, squareB, and squareC) are all included in the selectedSquares array, which would indicate a winning condition for either "X" or "O".
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true; } // If all three squares are included in the selectedSquares array, the function returns true, indicating a win condition has been met and executes the code to draw a win line on the board.
    }
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) { // This function is responsible for drawing a line on the canvas element to indicate a win condition. It takes four parameters: coordX1, coordY1, coordX2, and coordY2, which represent the starting and ending coordinates of the line to be drawn.
    const canvas = document.getElementById("canvas"); // Retrieves the canvas element from the HTML document using its id "canvas" and assigns it to the variable "canvas".
    const c = canvas.getContext("2d"); // Gets the 2D drawing context of the canvas, which allows for drawing shapes and lines on the canvas, and assigns it to the variable "c".

    c.beginPath(); // Begins a new path on the canvas, which is necessary before drawing a new line.
    c.moveTo(coordX1, coordY1); // Moves the drawing cursor to the starting coordinates (coordX1, coordY1) without drawing anything, setting the starting point for the line.
    c.lineTo(coordX2, coordY2); // Draws a line from the current position (the starting coordinates) to the ending coordinates (coordX2, coordY2) on the canvas.
    c.lineWidth = 10;
    c.strokeStyle = "rgba(70, 255, 33, 0.8)";
    c.stroke();

    disableClick(); // Disables clicking on the board while the win line is being drawn to prevent interference with the animation.
    setTimeout(function () { resetGame(); }, 1000);
}

function disableClick() { // This function temporarily disables clicking on the board to prevent multiple moves from being made while the computer is making its move or while the win line is being drawn.
    const body = document.getElementById("body");
    body.style.pointerEvents = "none";
    setTimeout(function () { body.style.pointerEvents = "auto"; }, 1000);
}

function resetGame() { // This function resets the game by clearing the selected squares, resetting the active player to "X", and clearing the win line from the canvas. It is called after a win or tie condition has been met and after a short delay to allow players to see the result before the game resets.
    for (let i = 0; i < 9; i++) {
        const square = document.getElementById(String(i));
        square.style.backgroundImage = "";
    }

    const canvas = document.getElementById("canvas"); //
    const c = canvas.getContext("2d"); // Retrieves the canvas element and its 2D drawing context again to clear the win line from the canvas.
    c.clearRect(0, 0, canvas.width, canvas.height); // Clears the entire canvas by specifying the starting coordinates (0, 0) and the width and height of the canvas, effectively removing any drawn lines or shapes.

    selectedSquares = []; // Resets the selectedSquares array to an empty array, clearing the record of which squares have been selected for the new game.
    activePlayer = "X"; // Resets the active player to "X" for the new game, ensuring that "X" will go first in the next round.
    gameOver = false; // Resets the gameOver variable to false, allowing the game to be played again after a win or tie condition has been met.
}