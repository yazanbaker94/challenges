'use strict';

let counter = 5;
let numbersArray = [];


for(let i=0; i<counter; i++) {
let questionOne = prompt("choose 5 numbers");
numbersArray.push(parseInt(questionOne));
}
let max = Math.max(...numbersArray)
alert('your max is: ' + max);


let min = Math.min(...numbersArray)
alert('your max is: ' + min);


