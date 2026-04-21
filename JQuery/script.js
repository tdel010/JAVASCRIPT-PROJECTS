$(document).ready(function () {
    //shineLoop uses the animate event method by using the chaining technique to
    //utilize more than one event method in the same function
    function shineLoop() {
        $(".shine").animate({ backgroundPositionX: '1600px' }, 3000)
            .animate({ backgroundPositionX: '-800px' }, 3000);
    };
    //setInterval will repeat the about shineLoop function and 0 
    //sets the delayed amount of time between each repeat
    setInterval(shineLoop, 0);

    //Shrinks header size when the document is scrolled down by 50 pixels
    $(document).on("scroll", function () {
        if ($(document).scrollTop() > 50) {
            $("h1").addClass("header-scrolled");
        } else {
            $("h1").removeClass("header-scrolled");
        }
    });

    //Triggers the images to slide down to show each title one after the other
    //when the user's mouseenters the div area with the #classicCars ID
    $("#classicCars").on({
        mouseenter: function () {
            $("#titleOne").show(1000);
            $("#titleTwo").show(1500);
            $("#titleThree").show(2000);
        }
    });

    //Triggers the images to slide up and hide each title one after the other
    //when the user's mouse leaves the div area with the #classicCars ID
    $("#classicCars").on({
        mouseleave: function () {
            $("#titleOne").hide(2000);
            $("#titleTwo").hide(1500);
            $("#titleThree").hide(1000);
        }
    });

    //Creates a toggle effect on each FAQ question by checking each element's sibling 
    //so they don't all display when one question is clicked
    $('div.question').on('click', function () {
        $(this).next().slideToggle('slow');
    });

})

$(document).ready(function () { // This section adds a highlight effect to the FAQ questions when they are clicked
 
    $(".faq .question h3").on("click", function () {

        // If this heading is already active, remove highlight and blur it
        if ($(this).hasClass("active")) {
            $(this).removeClass("active").css({
                "background-color": "",
                "outline": "",
                "padding": "",
                "border-radius": ""
            });
            $(this).blur(); // force blur so it behaves consistently
        } 
        else {
            // Remove highlight from any other active heading
            $(".faq .question h3.active").removeClass("active").css({
                "background-color": "",
                "outline": "",
                "padding": "",
                "border-radius": ""
            });

            // Add highlight to the clicked one
            $(this).addClass("active").css({
                "background-color": "yellow",
                "outline": "2px solid orange",
                "padding": "4px",
                "border-radius": "4px"
            });
        }
    });

});

$(document).ready(function () { // This section adds a toggle button to open or close all FAQ answers at once

    // Toggle all FAQ answers when clicking the FAQ <h2>
    $(".faq > h2").on("click", function () {
        $(".faq .answer").slideToggle(300);
    });

});

$(document).ready(function () { // This section adds a toggle button to open or close all FAQ answers at once

    let allOpen = false; // tracks whether answers are open or closed

    $("#faqToggle").on("click", function () {

        if (!allOpen) {
            // Open all answers
            $(".faq .answer").slideDown(300);
            $(this).text("Close All");
            allOpen = true;
        } else {
            // Close all answers
            $(".faq .answer").slideUp(300);
            $(this).text("Open All");
            allOpen = false;
        }

    });

});
