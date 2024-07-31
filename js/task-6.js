const inputNumber = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");

btnCreate.addEventListener("click", (event) => {
 const amount = parseInt(inputNumber.value, 10);
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  }
})

 btnDestroy.addEventListener("click", destroyBoxes);




function createBoxes(amount) {
  const markup = [];
  

  for (let i = 0; i < amount; i++)
  {
    const size = 30 + i * 10;
    const color = getRandomHexColor();
   markup.push(`<div class="new-box" style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`); 
    
  }
         boxesContainer.innerHTML = markup.join('');
}

function destroyBoxes() {
   boxesContainer.innerHTML = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
