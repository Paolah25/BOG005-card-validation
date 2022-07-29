import validator from './validator.js';

const creditCardNumber = document.getElementById('numerodetdc')
console.log(numerodetdc.value)
const enviar = document.getElementById("enviar")

enviar.addEventListener('click', () => {

    console.log(creditCardNumber.value)
    const result = validator.isValid(creditCardNumber.value)
    if ( result == true) {

        alert("Tarjeta válida, continue con su compra")

    } else {
        alert("tarjeta inválida, verifique con su banco")
    }
    console.log(validator.maskify(creditCardNumber.value));
    validator.maskify(creditCardNumber.value)
    creditCardNumber.value =  validator.maskify(creditCardNumber.value)
})





