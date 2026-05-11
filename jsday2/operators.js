//Arithmetic operator
console.log("operators in js");
let a = 56;
let b = 4;
console.log("a +b = ", a + b);
console.log("a - b = ", a - b);
console.log("a ** b = ", a ** b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a++ = ", a++ );  //56
console.log("++a = ", ++a);  //58
console.log("a-- = ", a--); //58
console.log("--a = ", --a);  //56

//Assignment operator
let assignment =1;
assignment +=5; //same as assignment =  assignment +5
console.log(assignment)  //6

//Comparison operator
let comp1= 6;
let comp2 =7;
console.log("comp1 == comp2 is" , comp1 == comp2) 
console.log("comp1 != comp2 is" , comp1 != comp2) 
console.log("comp1 === comp2 is" , comp1 === comp2) 
console.log("comp1 !== comp2 is" , comp1 !== comp2) 

//Logical operator --> used in boolean 
let x =5;
let y= 4;
console.log(x<y && x ==5) //false 
console.log(x>y || x ==5) //true
console.log(!false )  //true
console.log(!true )  //false

