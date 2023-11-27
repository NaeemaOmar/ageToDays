let ageYrs = document.querySelector('[data-ageInput]');
let result = document.querySelector('#result');

function  convertToDay(a){
    return result.textContent = `You are ${a*365.25} days old!`
}

let convertBtn = document.querySelector('#convertBtn')

convertBtn.addEventListener('click', ()=> convertToDay(ageYrs.value));
