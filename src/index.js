import validator from './validator.js';

const creditCardNumber =document.getElementById('numerodetdc')
console.log(numerodetdc.value)
const enviar =document.getElementById("enviar")

enviar.addEventListener('click', () => {
   
    console.log(creditCardNumber.value)
    const result = validator.isValid(creditCardNumber.value)
    
})




