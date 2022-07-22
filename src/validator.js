const validator = {
  isValid: function (creditCardNumber) {
    console.log("funcion", creditCardNumber)
    let numbersArray = creditCardNumber.split("").reverse();
    let reverseNumbers = parseInt(creditCardNumber);
    console.log(numbersArray)

    return reverseNumbers;
  },

};

//if (creditCardNumber ===" " || isNaN(reverseNumbers) || numbersArray.length !=16){


export default validator;
