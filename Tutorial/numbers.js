// let x="100";
// let y="10";


// let z=x/y;
// console.log(z); // This will work


// console.log(100/"AAA");  // this will result in NaN - Not a Number




// Number as Objects

// let x = 123;
// let y = new Number(123);
// console.log(y);


// console.log(x==y);  // loose checking will pass
// console.log(x===y); // strict checking will not pass


// Math function 

// console.log(Math.round(4.5));
// console.log(Math.round(4.6));
// console.log(Math.floor(4.5));
// console.log(Math.floor(4.8));
// console.log(Math.floor(4.21));

// console.log(Math.ceil(4.2));
// console.log(Math.max(1,5,67,32,55,99,1001));
// console.log(Math.min(1,5,67,32,55,99,1001));


// console.log(Math.pow(2,3)); // 2^3
// console.log(Math.sqrt(49));

console.log(Math.random()); // returns a random value between 0 and 1


// for random number between range

let min =1;
let max=10;
const randomNum = Math.round(Math.random() *(max - min) + min)
console.log(randomNum);



// other method related to numbers

// //toString()	Returns a number as a string
// toExponential()	Returns a number written in exponential notation
// toFixed()	Returns a number written with a number of decimals
// toPrecision()	Returns a number written with a specified length
// valueOf()	Returns a number as a number


// let x = 123;
// console.log(x.toString());

// let x = 9.34352634;
// console.log(x.toExponential(6));
// console.log(x.toFixed(3));
// console.log(x.toPrecision(4));


// Methods to convert Variables to Number 

// console.log(Number("10.433"));
// console.log(Number("Adam"));  // returns Nan if the string is not converatable
// console.log(Number(new Date("2024-10-12") )); // can also convert date into an number


console.log(Number.isInteger(10)); // this method return true if the argument is an integer
console.log(Number.parseInt("-10")); // converts a string to a whole number 










