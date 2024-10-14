// let colors = ['blue', 'green'];

// console.log(colors[0]);


// colors[0] = 45;

// console.log(colors[0]);

// console.log(colors.length);


// const cars = new Array("AAA","BBB","CCC");


const numbers = [1,2,3,4,5,6,9];
// numbers.push(7); // adds an element to the end of the array
// console.log(numbers);


// numbers.pop();  // removes an element from the end of an array
// console.log(numbers)

// const nestedArr = ["one" ,["three" , "two"] , "2" , 5 , 'gmail' , true , null]; 
// console.log(nestedArr.length);

// console.log(nestedArr[1]);
// console.log(nestedArr[1].length);




// numbers.push(8,9,10);
// console.log(numbers);

// // .indexOf() :- returns the index of the argument passed  ,in the array  . Returns -1 if argument not found in the array
// console.log(numbers.indexOf(6));


// // .lastIndexOf() :- in case of dulicate elements , this method will return the index of last occurance of the passed argumrnt , in the specified array
// console.log(numbers.lastIndexOf(9));


// // .includes() :- returns true or false , if the argument passed is in the array or not 

// console.log(numbers.includes(7));
// console.log(numbers.includes(11));



// .toString() converts an array to a string of array values , separated by comma


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let stringArray = fruits.toString();

// console.log(stringArray);



// const fruit1 = ["Banana" ,"Orange","Apple" ,"Mango"]

// let a=fruits.at(2);
// let b=fruits.join("#");

// fruits.pop();
// fruits.push("Watermelon");

// console.log(a,b);

// console.log(fruits);



// .shift() :- removes the first array element and "shifts" all other elements to a lower index.

// fruits.shift();

// console.log(fruits);

// fruits.unshift("Papaya"); // .unshift() adds a element to the start to the array

// console.log(fruits);


const myB = ["AAAU","BBB","CCC"];
const myG = ["DDD","EEE"];
const myT = ["FFF","HHH"];
// const myC = myB.concat(myG);

// const myC1 = myB.concat(myG,myT);

// console.log(myC);
// console.log(myC1);

// const newArray = myC1.slice(0,4); // .slice() method :- create a new array by slicing the original array . First param :- start pos of slice ,second param :- end position of the slice(exclusive)
// console.log(newArray);

// there is another way to concat arrays using spread operator ()...)
const myC3=  [...myB , ...myG , ...myT]; //more widely used methods
console.log(myC3);


// Reverse Array 

// console.log(myB[0].split("").reverse().join("")); // reversing an element of an array;
// console.log(myB.reverse()); //********************************************* */





// .flat() method creates a new array with sub-array elements concatenated to a specified depth.

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);



// .splice() methods adds new items to an array
// .slice() method slices out a piece   of an array


// fruits.splice(2,0,"Lemon" , "Kiwi");

//first param - position where new elements should be added
//second param - defines how many element should be removed
// rest param - defines the element to be added
// console.log(fruits);

// .toSpliced() the diffence is this method creates a new array keeping the original same

// fruits.toSplice(0,1);
// console.log(fruits);

// .splice to remove a element in an array

// fruits.splice(0,1);
// console.log(fruits);


// const f = fruits.slice(1); // param define which index element should be removed
// console.log(f);





// Finding Elements(References)

// const employees = [
//     {
//     id:1,
//     name:'Jim'
//     },
//     {
//         id:2,
//         name:'Micheal'
//     },
//     {
//         id:3,
//         name:'Pam'
//     }
// ];



// const employee =  employees.find(function(e) {
// return e.name==='Jim';
// });


// console.log(employee); // Comparing two objects even if they have the same properties will not help us findthe object , hence we use .find() method
// // .find() - takes A function as Argument(Parameter) , a callback function to be specific, aka predicate function  as it returns true or false


let products = [
    {name:'G I Joe' , category : "Toys"},
    {name:'Harry Potter' , category : "Book"},
    {name:'Spiderman' , category : "Game"},
    {name:'Woody' , category : "Toys"},
    {name:'Chronicles of Narnia' , category : "Book"},
    
]

let product = products.filter(product => product.category==='Book' && product.name==='Harry Potter');
console.log(product);



// const employeeIndex = employees.findIndex( function(e){
//     return e.name==='Micheal';
// });
// console.log(employeeIndex);





// emptying of an arrays

const num = [1,2,3,4,5,6];

// while(num.length>0){
//     num.pop()
// }
// console.log(num);


// num.splice(0,num.length);
// console.log(num);



// .join() :- method converts the array into an string 

// const n=[1,2,3,4,5];
// console.log(n.join(',')); //the param specifies the separator 



// const courseName = 'JavaScript for Beginners';

// const lc = courseName.toLowerCase();
// const parts = courseName.split(' ');

// const l = courseName.toLowerCase().split(' '); //method chaining 

// const urlSlug = parts.join('_');
// console.log(urlSlug);



// sorting arrays

// let arr=['d','t','y','a','g','c'];
// let sorted = arr.sort();
// console.log(sorted);

// let reversed = arr.reverse();
// console.log(reversed);

// - sorting objects in a array based on properties

// const employee1 = [
//     {
//     id:1,
//     name:'Jim'
//     },
//     {
//         id:2,
//         name:'Aicheal'
//     },
//     {
//         id:3,
//         name:'Pam'
//     }
// ];

// employee1.sort((a,b) => { 
//     const lowercaseA = a.name.toLowerCase();
//     const lowercaseB = b.name.toLowerCase();

//     if(lowercaseA<lowercaseB) return -1;
//     if(lowercaseA>lowercaseB) return  1;
//     return 0;
// })
// console.log(employee1);
// for sorting the objects in an array the .sort() method calls a callback function




// test elements in arrays

// .every() method test whether all elements in the array pass the condition
//specified by the provided callback function. It returns true if the callback function returns true
// for every element , and flse if any element fails the condition
// every() method :- returns a true or false value on the basis of result of callback function it calls to evaluate the elements of the array according to the conditions in the function , retun=rns a new array 
// // First para - Element of the array , Second para - Index of the element stored , Third para - is the original array ;



// const numE = [2,4,6,8,10,12] ;

// const areAllEven = numE.every(number => {
//     return number%2 === 0;
// })  


// console.log(areAllEven);





// .some() :- method works similar to .every() method . It returns true even if atleast element satifies the given condition in the callback function
// this method also takes in three arguments
// this method test whether atleast one of the element in the array pass the condition specified by the provided callback function 
// it returns true if the callback function returns true for at atleast on element , 
//and false if no element passes the condition 



// const numM = [1,3,5,7,2,8,9];
// const atleastOneEven = numM.some(number => number%2===0);
// console.log(atleastOneEven); 




// both .every() & .some() mrtheds are predicate functions i.e they return true or false base on the result of the callback functions






// filtering an array
// .filter() method returns an new array , based on the conditions in the callback function
// this method allows you to create a new array containing elements that pass a certain conditions 


// const evenNum  = [2,4,5,6,8,9,10];
// const filterNumber = evenNum.filter(numbers => numbers%2===0)
// console.log(filterNumber); 


// const words = ["spray","limit","elite" , "exuberant" , "destruction" , "present"];

// function filterOut(word){

//     if(word.length >=6)
//         return word;

// }

// const wordLimit = words.filter(filterOut);

// console.log(wordLimit);




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



// Mapping of the array

// .map() method process and transforms array based on the condition specified in the function to create a new array , not modifiying the original


// const numberSqr = [2,3,4,5,6,7,8];
// const sqrArray = numberSqr.map(num => num*num);
// console.log(sqrArray);

 
// const char = ['a','b','c','d','e'];
// const upperCharacter = char.map(char => char.toUpperCase());
// console.log(upperCharacter);


// const numb = [1,2,3,4,5];

// function mul(num){
//     return num * 10;

// }

// const newArr = numb.map(mul);
// console.log(newArr);

// // .map() method on object 


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

// console.log(updatedEmployee);



//  .reduce() method - it is a very powerful array method which can transform an array into any thing a string , number or an object 
// the method applies the reducer function to each element of an array accumulating te results into a single value . 
// It is often used to perform calculations or aggregation on array elements and simplify the array into a single value.
// make a new array  




// const n = [1,13,16,23,47];
// const sum = n.reduce((accumulator,currentValue) => {
    
//     console.log(`Previous Value : ${accumulator}`);
//     console.log(`Current Value : ${currentValue}`);

//     return accumulator+currentValue;
// } , 0); // second para is the initial value 

// console.log(sum);





// Concating two arrays using spread operators

// const i = ["AAA","BBB","CCC"];
// const j = ["DDD","EEE"];

// const concat = [...i , ...j];

// console.log(concat);


// Deconstruct an array 

// const foo = ["one","two","three"];

// const [one,two,three] = foo;  // the name in the array doesnt matter , one value of array is associated to the first element of the name declaration array 
// console.log(one);
// console.log(two);
// console.log(three);


// Accessing Element Array

// const [a , ...b] = ["one","teo","three"];
// console.log(a);
// console.log(typeof b);



// const color = ["red","green","blue","yellow","orange"];

// const [color1,color2,color3]=color;
// console.log(color1);
// console.log(color2);
// console.log(color3);




// forEach() :- when we call the ForEach helper we pass in anonymous callback function . This function gets called for every element in the array . 
// Whatever inside the function that logic happens 

// const col = ["teal", "blue","red","green"];


// function spellIt(color){

//     for(let char in color){
//         console.log(color[char]);
//     }

// }


// col.forEach(color => spellIt(color));
// // col.forEach(color => console.log(color)); 


// const words = ["hello" , "bird" , "table" , "football" , "pipe" , "code"];

// const capWord = words.forEach((word , index , arr) => {
//     arr[index] = word[0].toUpperCase() + word.substring(1);
// });

// console.log(words);


const sumArr = [ 34,53,223,252,230];
let s = 0;

function sumOp(num){

    
     s += num;
}

sumArr.forEach(sumOp);


console.log(s);
