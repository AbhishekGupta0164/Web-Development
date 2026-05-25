let array = [1, 2, 3, 4, 5];
let nums = [1, 2, 3, 4, 5];

console.log(nums);

//object syntax
let obj = {
    id: 1,
    nums: "nm"
};

// object creation
let data = {
    obj,
    add: 10
};

// Function with rest operator
function sum(a, b, c, ...nums) {
    console.log(a + b + c);

    console.log(nums); // remaining values
}

sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(nums);

// Variable scope example
if (true) {
    let a = 5;
    console.log(a); // works here
}

// console.log(a); // ReferenceError: a is not defined

let arr=[1,2,3,4,5]
let [a,b,c]=arr
console.log();

