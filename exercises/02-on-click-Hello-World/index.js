//Declare your function here
var button = document.querySelector("#hello");
button.addEventListener("click", function() {
    const parrafo = document.createElement("div");
    parrafo.innerHTML="Hello World";
    document.body.appendChild(parrafo);
});
