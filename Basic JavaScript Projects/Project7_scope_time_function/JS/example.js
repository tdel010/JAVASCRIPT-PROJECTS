function get_Hour() {
    if (new Date().getHours() < 12) {
        document.getElementById("Greeting").innerHTML = "Good Morning!";
    }
}