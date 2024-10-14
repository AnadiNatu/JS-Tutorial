// let a = 10 ;
// let b = a; // this will be same as let b = 10

// a=20;
// //so after this vlue of b will remain the same

// console.log(a);
// console.log(b);


let a = { value : 10};

let b = a;
a.value = 200;

console.log(a);
console.log(b);
//the reason why they will return the same value is that both variable are pointing towards the same reference of the object


//Primitive values are copied by their value;
//Object are copied by reference
