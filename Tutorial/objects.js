// let cars = {
//     name: "Ford",
//     units: 3
// }


// //properties of objects are stored as string 
// //they can be accessed by

// // console.log(cars.name);


// // We can update the value of the properties as well 

// cars.name = "Audi";

// console.log(cars.name);


// //different syntax

// console.log(cars['name']);


// //another way of accessing the values of property

// let property = 'units';

// console.log(cars[property]);


// const person = new Object();

// person.firstname='anadi';
// person.lastname='natu';
// person.age=19;
// person.eyeColours='blue';

// console.log(person);



// //Object Methods
// Method is a function inside of an object

// // const person1 = {
// //     fname:'aman',
// //     lname:'kohli',
// //     age:45,
// //     id:21,
// //     fullname: function(){return this.fname + " " + this.lname;}
// // };

// // console.log(person1.fullname());

// // person1.age = 44;
// // console.log(person1);
// // values of the properties in an object can change/mutable  , but the properties themselves cant change/ immutable;
// //the no of properties can be deleted or added


// // person1.nationality = "Indian";

// // console.log(person1);


// // delete keyword delete a property from an object 

// // delete person1.id;

// // console.log(person1);


// //nested objects 

// myObj = {
//     id : 1,
//     name: 'anadi natu',
//     age : 34,
//     myThings : {
//         thing1:"Keys",
//         thing2:"Wallet",
//         thing3:"Phone"
//     }
// }


// console.log(myObj.myThings.thing3);



// Displaying the objects

// const person1 = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };

//     for(let x in person1){
//         console.log(`${x} : ${person1[x]}`);
//     };
 

// Factory Functions :- Provides us way to make new objects more efficiently

// const dog ={
//     name:'Max',
//     breed:'Malemute',
//     age:5,
//     weightInPound:70,
//     eat: function(){
//         console.log('Chomp !');
//     },
//     bark(){
//         console.log('Woof!');
//     }
// }

// function getDog(name,breed,age,weightInPound){

//     return {
//         name, 
//         breed,
//         age,
//         weightInPound,
//         eat(){
//             console.log('Chomp!');
//         },
//         bark(){
//             console.log('Woof!');
//         }
//     }

    // we can write assignment like this when the params and properties are the same 

    // return {
    //     name:name, 
    //     breed:breed,
    //     age:age,
    //     weightInPound:weightInPound,
    //     eat(){
    //         console.log('Chomp!');
    //     },
    //     bark(){
    //         console.log('Woof!');
    //     }
    // }

// }

// const anotherDog = getDog('Bruno' , 'Labrador' , 4,60);
// console.log(anotherDog);



// Constructor Function :-

// function Dog(name,breed,age,weightInPound){

//     this.name=name;
//     this.breed=breed;
//     this.age=age;
//     this.weightInPound=weightInPound;

//     this.eat = function() {
//         console.log(this.name + " : Chomp!");
//     }

//     this.bark = function() {
//         console.log(this.name + " : Woof !");
//     }
// }


// const anotherDog = new Dog('Marley','Lab',3,60);


// console.log(anotherDog);
// console.log(new Dog('Bruno' , 'Labrador' , 4,60));



// let newObj = {};
// let newObj1 = new Object();
//These line means the same thing


//Functions are objects 

// function add(num1,num2){
//     return num1+num2;
// }

// let a = add;
// console.log( a(2,3));
// console.log(add.length); //gives the length of the params


// .filter() method on object

// const employee1 = [
//         {
//         id:1,
//         name:'Jim',
//         role:'Developer'
//         },
//         {
//             id:2,
//             name:'Aicheal',
//             role:'Designer'
//         },
//         {
//             id:3,
//             name:'Pam',
//             role:'Developer'
//         },
//         {
//             id:4,
//             name:'Toby',
//             role:'HR'
//         }
//     ];

//     const developers = employee1.filter(employee => employee.role==='Developer');
//     console.log(developers);


// const computer = [
//     {ram:4 , hdd:100},
//     {ram:8 , hdd:200},
//     {ram:16 , hdd:300},
//     {ram:32 , hdd:400},

// ];


// const needComputer = computer.filter(com => com.ram===16);

// console.log(needComputer );


 // .map() method on object 


// const employees = [
//         {
//         id:1,
//         name:'Jim',
//         role:'JiM@gmail.com'
//         },
//         {
//             id:2,
//             name:'Aicheal',
//             role:'MiCheal@gmail.com'
//         },
//         {
//             id:3,
//             name:'Pam',
//             role:'pAm@gmail.com'
//         },
//         {
//             id:4,
//             name:'Toby',
//             role:'tOBy@gmail.com'
//         }
//     ];

//     const updatedEmployee = employees.map(employee => ({
//         ...employee,
//         role:employee.role.toLowerCase()
//     }));
// // what we are doing here is that map method goes throug every object in the array preserving the original array 
// //and updating the role property

// const Programmer = new Function('name' , `
//     this.name = name;
//     this.writeCode = function() {
//     console.log("Code in JS")
//     }
//     `);

//     const newProgrammer = new Programmer('Steven');

//     newProgrammer.writeCode();




// .reduce() method on objects

const person = [
    {
        name:'Anadi',
        age:19
    },
    {
        name:'Aman',
        age:21
    },
    {
        name:'Nitin',
        age:43
    },
    {
        name:'Amar',
        age:32
    }
];

const oldest = person.reduce((previous , current) => {
    current.age > previous ? current.age : previous
}, 0);


console.log(oldest);





// const dog = {
//     name:'Max',
//     age:5,
//     eyeColour:'blue'
// };

// const keys = Object.keys(dog);
// console.log(keys);
// .key() is a method of Object class which returns the keys of the object passed as an array 

// console.log(Object.values(dog));  // same as above , but .value() method returns an array of values;

// const entries = Object.entries(dog);
// console.log(entries); // .entries() method returns the key-value pair


//using object methods to iterate over them

// for(const key of Object.keys(dog)){
//     console.log(key);
// }


// for(const values of Object.values(dog)){
//     console.log(values);
// }


// for(const entries of Object.entries(dog)){
//     console.log(entries);
// }



//Cloning object

// let a = {value : 10};
// let b = {};

// we use a different syntax;

// let b = { ...a}; // ... is knowm as spread operator . Spread operator is commonly used to make shallow copies of JS object 


// Other Example 

// function giveMe4(a,b,c,d){
    
//     console.log("a",a);
//     console.log("b",b);
//     console.log("c",c);
//     console.log("d",d);
    
// }


// const colors = ["red", "green" , "blue" , "yellow"];

// giveMe4(...colors); // the operator spreads the elements of the array into indivisual values 


// Concating two objects using spread operators

// const i = {x:1,y:2};
// const j = {z:11};

// const concatObj = {...i , ...j};

// console.log(concatObj);



// Object.assign(b,a); // .assign() method - create two independent reference of the object . First param is assigned the object referenced by the second param

// b.value=20;

// console.log(a);
// console.log(b);


// Destructure an object

// const dog = {
//     name:'Max',
//     age:5,
//     eyeColour:'blue'
// };

// const {name} = dog; // we have to keep the variable name same as the property name 
// console.log(name);

// const {eyeColour} = dog;
// console.log(eyeColour);




// let { a , b, ...rest} = {a:100 , b:200 , c:300 , d:400 , e:500};

// console.log({rest});




// // Renaming th variable(property)

// const num = {x : 100 , y : 200};

// const {x: XNum , y : YNum} = num; // we are changing the name to of the property

// console.log(XNum);
// console.log(YNum);




