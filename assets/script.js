
let num = parseInt(prompt('Scrivi un numero'));
const cont_num = document.querySelector('.container_num');
for (let i = 1; i <= num; i++) {
 
    if (i % 3 === 0 && i % 5 === 0){
     cont_num.innerHTML = cont_num.innerHTML + `<div class="number fizzBuzz">FizzBuzz</div>`;
    }
   else if(i % 3 === 0){
    cont_num.innerHTML = cont_num.innerHTML + `<div class="number fizz">Fizz</div>`;
   }
   else if (i % 5 === 0) {
    cont_num.innerHTML = cont_num.innerHTML + `<div class="number buzz">Buzz</div>`;
   }

   else{
    cont_num.innerHTML = cont_num.innerHTML + `<div class="number">${i}</div>`;
   }

}
