function countdown() { // Countdown function
    var seconds = document.getElementById("seconds").value; // Get the value of seconds from the input field

    function tick() { // Tick function to update the countdown every second
        seconds = seconds - 1; // Decrease the seconds by 1
        timer.innerHTML = seconds; // Update the timer display with the current seconds
        setTimeout(tick, 1000); // Call the tick function again after 1 second
        if (seconds == -1) { // When the countdown reaches -1, it means time's up
            alert("Time's up!"); // Alert the user that time is up
            clearTimeout(time); // Clear the timeout to stop the countdown
            timer.innerHTML = ""; // Clear the timer display
        }
    }
    tick(); // Start the countdown by calling the tick function
}



let slideIndex = 1; // Initialize the slide index to 1
showSlides(slideIndex); // Show the first slide when the page loads

// Next/previous controls
function plusSlides(n) { // Function to change slides when the next or previous buttons are clicked
  showSlides(slideIndex += n); // Update the slide index by adding n (which can be 1 for next or -1 for previous) and show the corresponding slide
}

// Thumbnail image controls
function currentSlide(n) { // Function to show a specific slide when a thumbnail is clicked
  showSlides(slideIndex = n); // Set the slide index to n (the number of the clicked thumbnail) and show the corresponding slide
}

function showSlides(n) { // Function to display the slide corresponding to the current slide index
  let i; // Declare a variable i for use in the loops
  let slides = document.getElementsByClassName("mySlides"); // Get all elements with the class name "mySlides" and store them in the slides variable
  let dots = document.getElementsByClassName("dot"); // Get all elements with the class name "dot" and store them in the dots variable
    if (n > slides.length) {slideIndex = 1} // If the slide index exceeds the number of slides, reset it to 1
    if (n < 1) {slideIndex = slides.length} // If the slide index is less than 1, set it to the number of slides (to loop back to the last slide)
    for (i = 0; i < slides.length; i++) { // Loop through all slides and hide them
      slides[i].style.display = "none"; // Set the display style of each slide to "none" to hide it
    }
    for (i = 0; i < dots.length; i++) { // Loop through all dots and remove the "active" class from them
      dots[i].className = dots[i].className.replace(" active", ""); // Remove the "active" class from each dot by replacing it with an empty string
    }
    slides[slideIndex-1].style.display = "block"; // Display the current slide by setting its display style to "block"
    dots[slideIndex-1].className += " active"; // Add the "active" class to the current dot to indicate which slide is active
}
