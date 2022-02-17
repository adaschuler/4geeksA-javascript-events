window.onload = function myLoadFunction() {
	alert("The website just finished loading!");
	//some code here
};

//the listener function here
function alertPop() {
  alert("wuju");
}

// Add event listener to table
const el = document.getElementById("theGreen");
el.addEventListener("click", alertPop);