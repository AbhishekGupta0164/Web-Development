// Q1- program to add first n numbers using for loop

const prompt = require("prompt-sync")();  
// let sum = 0;
// let n = prompt("Enter the value of n: "); 
// n = Number.parseInt(n);

// for (let i = 0; i < n; i++) {
//   sum += (i + 1);
// }
// console.log("Sum of first " + n + " natural numbers is " + sum);

// Q2 -  for in loop
let obj = {
    abhi:90,
    shivam:85,
    ankit:70,
    rahul:60,
    shiv:34,
};
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a]);
}

// Q3 - for of loop
// let obj = {
//     shivam:80,
//     ankit:70,
//     rahul:60,
//     shiv:34,
// };
// for(let a in obj){
//     console.log("Marks of " + a + " are " + obj[a]);
// }
// for(let b of "shivam"){
//     console.log( b);
// }

// Q4
// let sum = 0;
// let n = prompt("Enter the value of n: "); 
// n = Number.parseInt(n);

// for (let i = 0; i < n; i++) {
//   sum += (i + 1);
// }
// console.log("Sum of first " + n + " natural numbers is " + sum);
// // console.log(i)