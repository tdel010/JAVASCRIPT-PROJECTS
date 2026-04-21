function getMsg() {
    //STEP 1: Setup the XML HTTP request object
    let ajaxRequest = new XMLHttpRequest();

    //Get input value of name to diplay to user after request as been made
    let inputVal = document.getElementById("Name").value;

    //STEP 2: Prepare the type of request and what to request from the server
    ajaxRequest.open('GET', 'content.html', true);

    //STEP 3: Defines the AJAX response callback method that establishes whether the response was successful and where the data should be displayed
    ajaxRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
            //Function to display user input value once request has been received
            document.getElementById("wiseMsg").innerHTML = "Calm seas don't make skillful sailors, " + inputVal + "!";
        }
    }

    //STEP 4: Send the request 
    ajaxRequest.send();
}