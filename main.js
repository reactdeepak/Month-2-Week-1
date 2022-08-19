var prevColor = "#b27891";
var currentColor = "#b27891";
const btn = document.getElementById("btn");
const prevBtn = document.getElementById("prev");
const color = document.getElementById("color");
function generateRandomColor() {
  prevColor = currentColor;
  var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  color.style.background = randomColor;
  color.innerHTML = `${randomColor}`;
  currentColor = randomColor;
}
function lastColor() {
  color.style.background = prevColor;
  color.innerHTML = `${prevColor}`;
}
btn.addEventListener("click", generateRandomColor);
prevBtn.addEventListener("click", lastColor);
