/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", validateForm);

function validateForm() {
  let x = document.getElementById('time').value;
  if (x > 24 || x < 0) {
    alert("Must be in range of (0 - 24) o clock");
  }
  else  {
    handleClick()
  }
}

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
function greet(time) {
  var hour = time.split(':')[0];
  hour = parseInt(hour);
  if ( hour < 12) return "Good Morning";
  if ( hour > 17) return "Good Evening";
  return "Good Afternoon";

}

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}