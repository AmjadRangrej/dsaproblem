// program to display the sum of natural numbers
const prompt=require("prompt-sync")({sigint:true}); 

// take input from the user
const number = parseInt(prompt('Enter a positive integer: '));

let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}

console.log('The sum of natural numbers:', sum);