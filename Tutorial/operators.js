function greaterNumber(n1 , n2){

    return n1>n2;
}

greater = greaterNumber(3,5);
// console.log(greater);
// console.log(typeof greater);


//Loss equality - when comparing two different datatypes 
//Loss equality doesn't check if the datatypes are the same
let a = 2;
let b = '2';

// console.log(a == b);
// //truthy

// console.log( a === b); //this is known as strict equality

//tertiary operator

// let age =16;
// const ageCorrect = age>=16 ? true : false;
// // variable = condition ? cond passed : cond failed;
// console.log(ageCorrect);




//logical operators

// console.log(true || true);
// console.log(true && true);
// console.log(true && false);

// let age1 = 19;
// let hasCar = true;

// const canDrive = age >=16 && hasCar;
// console.log(canDrive);

// ?? null coalescing opertor 
// If a value of a operator is null or underfined we send a default value

let q = null;
const result = a ?? false;
const result1 = (a == null && a == undefined) ? a : false; //above line is the short hand version
console.log(result);
console.log(result1);


let n = 5+5*4;

// for these operators the presedence will be PEMDAS