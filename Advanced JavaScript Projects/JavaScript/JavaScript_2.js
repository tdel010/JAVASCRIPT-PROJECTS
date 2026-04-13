function validateForm() { // Trimmed values to prevent empty spaces from being considered valid input
    var name = document.forms["contactForm"]["name"].value.trim();
    var email = document.forms["contactForm"]["email"].value.trim();
    var message = document.forms["contactForm"]["message"].value.trim();

    if (name === "") { // Check if the name field is empty after trimming
        return { isValid: false, error: "Please enter your name." };
    }

    if (email === "") { // Check if the email field is empty after trimming
        return { isValid: false, error: "Please enter your email." };
    }


    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Validate email format using a regular expression
    if (!emailPattern.test(email)) { // If the email does not match the pattern, return an error message
        return { isValid: false, error: "Please enter a valid email address." };
    }

    if (message === "") {  // Validate that the message field is not empty after trimming
        return { isValid: false, error: "Please enter a message." };
    }

    return { // If all validations pass, return an object indicating the form is valid and include the form data
        isValid: true,
        data: {
            name: name,
            email: email,
            message: message
        }
    };
}

function submitForm() { // Call the validateForm function to check the form data and get the result
    var result = validateForm();
    var output = document.getElementById("output");

    if (!result.isValid) { // If the form is not valid, display the error message in red 
        output.textContent = result.error;
        output.style.color = "#b00020";
        return;
    }

    output.style.color = "#1a1a1a"; // If the form is valid, display the submitted data
    output.innerHTML = "<strong>Form Submitted!</strong><br>" +
        "Name: " + escapeHtml(result.data.name) + "<br>" +
        "Email: " + escapeHtml(result.data.email) + "<br>" +
        "Message: " + escapeHtml(result.data.message);
}

function escapeHtml(value) { // Function to escape HTML special characters to prevent hacking attempts and ensure that user input is displayed safely on the page.
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
