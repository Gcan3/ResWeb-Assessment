// funtion for the live clock
function refreshTime() {
    // store the html tag to the script
    const timeDisplay = document.getElementById("timenow");
    // get the local timing and store inside a variable
    const dateString = new Date().toLocaleTimeString();
    // the current time is replaced by itself using .replace() and is stored inside a different variable
    const formattedString = dateString.replace();
    // use the blank space inside the html to place the formatted time
    timeDisplay.textContent = formattedString;
}
// to make it live, the function repeats itself every second
setInterval(refreshTime, 1000);