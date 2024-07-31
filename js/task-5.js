const btnChange = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const spanText = document.querySelector(".color");

btnChange.addEventListener("click", (event) => {
  const newColor = getRandomHexColor();
  bodyColor.style.backgroundColor = newColor;
  spanText.textContent = newColor;
  
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
