// This line defines a constant variable named "Calculator" to keep track of values.
const Calculator = { 
    Display_Value: "0", // This property holds the current value displayed on the calculator screen, initialized to "0".
    First_Operand: null, // This property will store the first operand entered by the user, initialized to null until a value is entered.
    Wait_Second_Operand: false, // This property is a boolean that indicates whether the calculator is waiting for the second operand after an operator has been entered, initialized to false.
    operator: null, // This property will store the operator that the user has entered (e.g., "+", "-", "*", "/"), initialized to null until an operator is entered.
};

// This function handles the input of digits into the calculator. 
function Input_Digit(digit) { 
    const { Display_Value, Wait_Second_Operand } = Calculator; 
    if (Wait_Second_Operand === true) { // If the calculator is waiting for a second operand, it sets the display value to the digit that was just entered and changes the wait state to false, allowing the user to enter the second operand.
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else { // If the calculator is not waiting for a second operand, it checks if the current display value is "0". If it is, it replaces it with the new digit; otherwise, it adds the new digit to the existing display value. This allows for multi-digit numbers to be entered.
        Calculator.Display_Value = Display_Value === "0" ? digit : Display_Value + digit;
    }
}

// This function handles the input of a decimal point into the calculator. 
function Input_Decimal(dot) { 
    if (Calculator.Wait_Second_Operand === true) return; // If the calculator is waiting for a second operand, it does not allow the user to input a decimal point and returns without doing anything.
    if (!Calculator.Display_Value.includes(dot)) { // If the current display value does not already include a decimal point, it appends the decimal point to the display value. This prevents the user from entering multiple decimal points in a single number.
        Calculator.Display_Value += dot;
    }
}

// This function handles the input of an operator into the calculator. 
function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator; 
    const Value_of_Input = parseFloat(Display_Value);
    if (operator && Calculator.Wait_Second_Operand) { // If an operator is already set and the calculator is waiting for a second operand, it updates the operator to the new one entered by the user and returns without performing any calculation. 
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) { // If an operator is already set, it performs the calculation using the first operand, the current display value (converted to a number), and the operator. The result is then formatted to 9 decimal places, converted back to a string, and displayed on the calculator screen. The first operand is also updated to the result for potential further calculations.
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);
        result = Number(result).toFixed(9);
        result = (result * 1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}
const Perform_Calculation = { // This object contains functions for performing the actual calculations based on the operator that was input by the user. 
    "/": (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    "*": (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    "+": (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    "-": (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    "=": (First_Operand, Second_Operand) => Second_Operand
};
function Calculator_Reset() { // This function resets the calculator to its initial state by setting the display value back to "0", clearing the first operand, and resetting the operator and wait state.
    Calculator.Display_Value = "0";
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display() { // This function updates the calculator's display to show the current value of "Display_Value" 
    const display = document.querySelector(".calculator-screen");
    display.value = Calculator.Display_Value;
}

Update_Display(); // This line calls the Update_Display function to ensure that the calculator's display is updated with the initial value when the page loads.
const keys = document.querySelector(".calculator-keys"); 
keys.addEventListener("click", (event) => {  // When any button is clicked, it checks if the clicked element is a button and then determines which type of button it is (operator, decimal, all-clear, or digit) to call the appropriate function and update the display accordingly.
    const { target } = event;
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("decimal")) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains("all-clear")) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})