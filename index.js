/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  var hour = time.split(':')[0]
  hour = parseInt(hour)
  if ( hour < 12) return "Good Morning"
  if ( hour > 17) return "Good Evening"
  return "Good Afternoon"

}


function displayMessage(message) {

  document.getElementById("greeting").innerText = message;
}


/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */


// If the time is earlier than 12pm, return "Good Morning"
// If the time is between 12pm and 5pm, return "Good Afternoon".
// If the time is later than 5pm, return "Good Evening".


