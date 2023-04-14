
let num = parseInt(prompt('Scrivi un numero'));
const eleGrid = document.querySelector('.container_num');
for (let i = 1; i <= num; i++) {
    console.log(i);
    eleGrid.innerHTML = eleGrid.innerHTML + `<div class="number">${i}</div>`;
}