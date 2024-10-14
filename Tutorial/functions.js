// function sayHi(name ){
//     console.log('Hi' + ' ' +name);
// }


// sayHi('Anadi');

// Types of functions

// function add(n1 , n2){

//     return n1 + n2;
// }

// console.log(add(2,3));

// ^ exponential operator is ** in JS , REMINDER


// function toCelsius(fahrenheit) {

//     return (5/9) * (fahrenheit - 32);

// }

// let x = toCelsius(77);
// let text = "The temperature is" + x + "Celsius";
// console.log(text);


// let text1 = "The temperatur is " + toCelsius(89) + " Celsius";
// console.log(text1);




// function expression can be stored in a vaiable  , we can do this because functions are objects in JS

// const x1 = function (a,b) {return a * b};
// console.log(x1(4,3))

// the above functions is an anonymous functions
// the variable above is the reference of the function object , so we just ned to iinvoke the variable 

// greeting("John");

// const greetings = function(user) {
//     console.log(`Hello ${user}`);
// }

//in hte above example we will get an Uncaught Reference Error , cannot access 'function' before intialization 

// Functions Constructor

// const myFun = new Function("a", "b","return a*b");
// let x12 = myFun(5,2);
// console.log(x12);




// self invoking functions 
//a self invoking expression is invoked(started) automatically , without being alled

(function (){

    let x = "Hello"; // I will invoke myself
})();

// above was a anonymous self invoking function


// functions are Objects , JS functions have both methods and properties

// function myFunc(a,d){
//     return arguments.length;
// }

// function myFunc1(a,b){
//     return a*b;
// }

// let text = myFunc1.toString();





// JS parameters rules 
// .) JS functions do not specify the datatypes for the parameters
// .) JS functions do not perform type checking on the passed arguments
// .) JS functions do not check the number of arguments received

// if a function is called with missing argumnets , the missing value are set to undefined

// JS functions parameter are allowed to have defalt values


// function myFun(x,y=20){
//     return x+y;
// }

// console.log(myFun(4));





// Function Rest Parameter{...} - rest parameter(...) allows a function to treat an indefinite number of arguments as an array
// Other Definition - Rest Parameter syntax allows a function to accept an indefinite number of arguments ,
//as an array , providing a way to represent varidic functions in JS 



// function sum(...arg){
//     let sum = 0;
//     for(let args of arg){
//         sum+=args;
//     }
//     return sum;
// }

// let x = sum(4,2,1,3,33,11,44,55,22,77,88)
// console.log(x);


// function multiply(...args){
//     return args.reduce((accumulator , currentValue) => accumulator * currentValue , 1);
// }

// console.log(multiply(22,3,4,12,10,22,12121));


// function multiply(multiplier , ...numbers){

//     return numbers.map(number => number*multiplier);  // each number will be multiplied by multiplier

// }

// console.log(multiply(2,1,2,3,4,5,6));  // First para will be the multiplier , rest parameters will form the array for the rest parameter 

// *Note* when passing rest para with other parameters , the rest para must be the last argument so that it catches rest of the arguments passwd to the function



// Fuctions built-in object called the arguments object

let x = findMax(1,2,3,22,331,2211,464);

function findMax(){

    let max = -Infinity;
    for(let i = 0 ; i<arguments.length ; i++){
        if(arguments[i]>max){
            max=arguments[i];
        }
    }
return max;
}

console.log(x);



// *Notes*
//Changes to arguments are not visible(reflected) outside the function
//Changes to object properties are visible(reflected) outside the function




//Invoking function using function constructor

// const myObject = {
//     fname:"John",
//     lname:"Doe",
//     fullName: function(){
//         return this.fname + " " + this.lname;
//     }
// }


// console.log(myObject.fullName());


// function MyFullName(arg1,arg2){

//     this.fname=arg1;
//     this.lname=arg2;
// }


// const myObj = new Function("Anadi","Natu");

// console.log(myObj.fname);





// .call() method , this method is used to invoke a method with an owner object as an argument(parameter)

// const person ={ 
//     fullName : function() {
//         return this.fname + " " + this.lname;
//     }
// }

// const person1={
//     fname:"Anadi",
//     lname:"Natu"
// };

// const person2={
//     fname:"Mary",
//     lname:"Doe"
// }

// console.log(person.fullName.call(person2));


// call() method with arguments


// const person = {
//     fullName: function(city, country) {
//       return this.fname + " " + this.lname + "," + city + "," + country;
//     }
//   }


//   const person1 ={
//     fname:"Aman",
//     lname:"Kohli"
//   }


//   console.log(person.fullName.call(person1,"Lucknow","India"));



// .apply() method , you can write a method that can be used on different objects
// the difference btw .call() & .apply() method is that .call() method takes arguments separately whereas the .apply() method takes the arguments as an array

// const person = {
//     fullName : function(city , country){
//         return `Full Name :-  ${this.fname}  ${this.lname} , City :- ${city} , Country:- ${country}`; 
//     }
// }


// const person1= {
//     fname:"Anadi",
//     lname:"Natu"
// }


// console.log(person.fullName.apply(person1 ,["Lucknow","India"]));





// Another way of finding the max number in an array 


// console.log(Math.max.apply(null , [1,2,3]));





//Function hoisting : hoisting means that we can use a variable or a function before it is even declared

// add(3,2);

// function add(num1,num2){
//     console.log(num1+num2);
// }

// hoisting doesnt work with anonymous expression functions



// If less arguments are send to the function ,the missing argument is assigned to undefined



// Default Function
//Default Function Parameter , allows you assign default values to funtion parameters , When a function is called , and an argumnet is not provided for a parameter , the default value will be used instead . 
//This feature makes it easier to handle cases where arguments might be missing or undefined 


function codeDetails(language='JavaScript' ,  tool='VS Code'){


    console.log(`Writing code in ${language} using ${tool}`);
}

console.log(codeDetails());
console.log(codeDetails('Java'));
console.log(codeDetails('#C' , 'VS Studios'));




// Callback Function - when we pass a function as an argument(parameter) to other function that function is called a callback function 


function greet(name , cb){
    console.log(`Hello ${name}`);
    cb();
}

function cb(){

    console.log('I m a callback function');
}

greet("John" , cb);


function showCallFunc(fn){
    let value = 10;
    console.log(value);
    fn(value);
}


function fn(value){
    console.log(`the value in the variable is ${value}`);
}

showCallFunc(fn);


// deconstructing an function

function f(){

    return [1,2];
}

// let a,b;
// [a,b] = f();

// console.log(a);
// console.log(b);


function g(){
    return [1,2,3];
}

let [a, ,b] = g(); // we are omitting a the second value returned by the function
console.log(a);
console.log(b);




// Destructure a function 

const person = {
    name : "Anadi",
    age : 20,
    country : "India"
}

function printPerson({name,age,country}){
    console.log(`Name :- ${name}`);
    console.log(`Age :- ${age}`);
    console.log(`Country :- ${country}`);

}

printPerson(person);