/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    const sum = number1 + number2
    return sum
}

function addNumbers(){
    const addNumber1 = Number(document.querySelector('#add1').value)
    const addNumber2 = Number(document.querySelector('#add2').value)
    const sum = add(addNumber1, addNumber2)

    document.querySelector('#sum').value = sum
      console.log('first number', addNumber1)
      console.log('second number', addNumber2)
      console.log('sum', sum)
  }

document.querySelector('#addNumbers').addEventListener('click', addNumbers)

/* Function Expression - Subtract Numbers */

function subtract(number1, number2){
  const difference = number1 - number2
  return difference
}

function subtractNumbers(){
  const firstNumber = Number(document.querySelector('#subtract1').value)
  const secondNumber = Number(document.querySelector('#subtract2').value)
  const difference = subtract(firstNumber, secondNumber)

  document.querySelector('#difference').value = difference
    console.log('first number', firstNumber)
    console.log('second number', secondNumber)
    console.log('difference', difference)
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;

multiplyNumbers = function(){
  const firstNumber = Number(document.querySelector('#factor1').value)
  const secondNumber = Number(document.querySelector('#factor2').value)
  const product = multiply(firstNumber, secondNumber)

  document.querySelector('#product').value = product
    console.log('first number', firstNumber)
    console.log('second number', secondNumber)
    console.log('product', product)
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => number1 / number2;

divideNumbers = function(){
  const firstNumber = Number(document.querySelector('#dividend').value)
  const secondNumber = Number(document.querySelector('#divisor').value)
  const quotient = divide(firstNumber, secondNumber)

  document.querySelector('#quotient').value = quotient
    console.log('dividend', firstNumber)
    console.log('second number', secondNumber)
    console.log('product', product)
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)

/* Decision Structure */
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const yearElement = document.querySelector('#year');
yearElement.textContent = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const arrayElement = document.querySelector('#array')
arrayElement.textContent = numbersArray;

/* Output Odds Only Array */
const oddNumbers = numbersArray.filter(function (number) {
  return number % 2 !== 0;
})

const oddsElement = document.querySelector('#odds')
oddsElement.textContent = oddNumbers;

/* Output Evens Only Array */
const evenNumbers = numbersArray.filter(function (number) {
  return number % 2 === 0;
})

const evensElement = document.querySelector('#evens')
evensElement.textContent = evenNumbers;

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue);

const sumElement = document.querySelector('#sumOfArray')
sumElement.textContent = sumOfArray

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map((number) => number * 2);
const multipliedElement = document.querySelector('#multiplied')
multipliedElement.textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce((accumulator, currentValue) => accumulator + currentValue);

const sumOfMultElement = document.querySelector('#sumOfMultiplied')
sumOfMultElement.textContent = sumOfMultiplied;