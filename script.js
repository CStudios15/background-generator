var h3 = document.querySelector("h3");
var firstColor = document.querySelector(".color1");
var SecondColor = document.querySelector(".color2");
var body = document.getElementById("gradient");


setGradient();

function setGradient()
{
    body.style.background = "linear-gradient(to right, " + firstColor.value +"," + SecondColor.value + ")";
    h3.textContent = body.style.background + ";";
}



firstColor.addEventListener("input", setGradient);


SecondColor.addEventListener("input", setGradient);