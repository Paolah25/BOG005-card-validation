const validator = {
  isValid: function (creditCardNumber) {
    console.log("function", creditCardNumber)
    let numbersArray = creditCardNumber.split("").reverse().join("");
    let reverseNumbers = parseInt(creditCardNumber);
    console.log(numbersArray);
    let operAccion = 0;
    let suma = 0

    if (creditCardNumber === "" || isNaN(reverseNumbers)) {
      return false;
    } else {
      for (let i = 0; i < numbersArray.length; i++) {

        if (i % 2 != 0) {
          let numbTwo = numbersArray[i] * 2;
          console.log("numbtwo", numbTwo);
          if (numbTwo >= 10) {
            let cambString = numbTwo.toString();
            let divide = cambString.split("");
            console.log("divide", divide);
            suma = parseInt(divide[0]) + parseInt(divide[1]);
            operAccion = operAccion + suma;

          } else {
            operAccion = operAccion + numbTwo;

          }
        } else {
          operAccion = operAccion + parseInt(numbersArray[i]);

        }
      }

      console.log(operAccion);
      if (operAccion % 10 == 0) {
       return true;
      } else {
       return false;
      }
    }
  },



  maskify: function (creditCardNumber) {
    let finalNumber = '';
for (let i = 0; i < creditCardNumber.length; i++) {
  if (i < creditCardNumber.length - 4) {
    finalNumber = finalNumber + '#';
  }
  else {
    finalNumber = finalNumber + (creditCardNumber[i]);
    
  }
}
return finalNumber;
}

}

export default validator;
