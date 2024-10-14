//Arrow functions , also known as fat arrow functions are a concise and shorter way to define functions in JavaScript . It provides a more compact syntax compared to traditional function expressions

let hello = () => {
    return 'Hello World';
};

console.log(hello);


// even shorter version 

hello1 = () => {"Hello World"};


//passing argument in the arrow function
hello3= (val) => "Hello" + val;

//you can skip parenthesis if there is only one value



const add =(num1,num2) => { return num1+num2;}
console.log(add());


setTimeout( () => {
    console.log("Hello");
    setTimeout( () => {
        console.log("Hey");
        setTimeout( () => {
            console.log("Namaste");
            setTimeout( () => {
                console.log( "Bonjour");
                setTimeout( () => {
                    console.log("Hi");
                },2000);
            },2000);
        },2000);
    },2000);
},2000);




