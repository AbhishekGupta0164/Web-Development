const hello = () => {
  console.log("hello how are you ?");
  return "hi"
};
function onePlusAvg(x, y) {
  // return Math.round(1+(x,y) /2) //use math.roud for round of number
  return 1 + (x, y) / 2; // direct for decimal answer
}

const sum = () => {
  return p + q;
};
let a = 1;
let b = 3;
let c = 5;
let v = hello();
console.log(v)
console.log("Average of a and b is ", onePlusAvg(a, b));
console.log("Average of a and c is ", onePlusAvg(b, c));
console.log("Average of b and c is ", onePlusAvg(a, c));
console.log(sum(9, 7));
