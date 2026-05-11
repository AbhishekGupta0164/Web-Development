// Q1    (runs on console)
let age =  prompt("What is your age? ")
if(age>10 && age<20){
    console.log("your age lies between 10 and 20 ")
}
else{
    console.log("Your age doesnot lies between 10 and 20")
}

//Q2
let age2 = prompt("What is your age?")
switch(age){
    case '12':
    console.log("Your age is 12")
    break
    case '13':
    console.log("Your age is 13")
    break
    case '14':
    console.log("Your age is 14")
    break
    case '15':
    console.log("Your age is 15")
    break
    case '16':
    console.log("Your age is 16")
    break
   default: 
   console.log("Your age is not special")
}