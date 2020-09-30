// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
let newDate= (new Date)
var minutes = 1000 * 60;
var hours = minutes * 60;
var days = hours * 24;
var years = days * 365;

console.log(newDate)

let newDay = newDate.getDay()
let newTime = newDate.getTime()
let convertToYear = Math.round(newTime / years);
console.log(newTime)
console.log(newDay)
//starts counting from 1970, adjusted for 0 index
console.log(convertToYear +1969)


// this is the example
const displayDate = () => {
  const currentDate = new Date()
  document.getElementById("display-element").innerHTML = currentDate;
}


// Write a JavaScript program to convert a number to a string.
let numberVar = 9;
let newString = '7'
console.log(numberVar)

const numberToString = (stringifyTarget) => {
 stringifyTarget = numberVar.toString()//Can put radix inside toString() 
 console.log('Turned the number below into a string')
 document.getElementById("display-2").innerHTML = stringifyTarget + " is now a string"
  console.log(stringifyTarget)
}

// numberToString(newString)

// Write a JavaScript program to convert a string to the number.

const stringToNumber = (numberifyTarget) => {
 numberifyTarget = parseInt(numberifyTarget, 10)
  console.log('Turned the string below into a number')
  console.log(numberifyTarget)
  document.getElementById("display-3").innerHTML = numberifyTarget + " is now a number"
}

// stringToNumber(newString)

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  
let booleanVar = true;

let noValue = null;

let undefinedVar;

let numberVariable = 1;

let stringVar = 'This is a String'

const checkVariableType = (checkVariable) => {
  document.getElementById('display-4').innerHTML = (typeof checkVariable)
  console.log(typeof checkVariable)
}
// console.log('below are checked data types')
// checkVariableType(booleanVar)
// checkVariableType(noValue)
// checkVariableType(undefinedVar)
// checkVariableType(numberVariable)
// checkVariableType(stringVar)

  
// Write a JavaScript program that adds 2 numbers together.

let eightVar = 8

let nineVar = 9

let sumOfBoth = 0;

const findSum = (varA, VarB) => {
  sumOfBoth += varA + VarB;
  document.getElementById('display-5').innerHTML = sumOfBoth
}

// findSum(nineVar, eightVar)

// console.log(sumOfBoth)

// Write a JavaScript program that runs only when 2 things are true.

const doubleTruthCheck = (varA, varB) => {
  if ((typeof varA == 'number') && (typeof varB == 'number')){
    document.getElementById("display-6").innerHTML = ('both variables are numbers')
  }
}

// doubleTruthCheck(nineVar, eightVar)

// Write a JavaScript program that runs when 1 of 2 things are true.

const singleTruthCheck = (varA, varB) => {
  if ((typeof varA == 'number') || (typeof varB == 'number')){
    document.getElementById("display-6").innerHTML = ('at least one variable is a number')
  }
}
// singleTruthCheck(nineVar, eightVar)

// Write a JavaScript program that runs when both things are not true.  

const lieDetector = (varA, varB) => {
  if ((typeof varA == 'string') || (typeof varB == 'string')){
    document.getElementById("display-6").innerHTML = ('At least one variable is a string')
  }
  else {
    document.getElementById("display-6").innerHTML = 'both variables are not strings'
  }
}
// lieDetector(nineVar, eightVar)

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
