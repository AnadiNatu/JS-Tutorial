// JavaScript for..of statement loops through the elements of an iterable object.
// iterating means looping over a sequence of elements

// The typeof operator returns object for all types of objects:

// objects
// arrays
// sets
// maps


// this keyword
const obj = {
    name:'Java ',
    start() {
        console.log(this.name);
    }
}


// instanceof operator returns true if an object is an instance of a specified object type:

const time = new Date();
console.log(time instanceof Date);



// Type Conversions





// String => Number 

// Number() converts a variable(or a value) into a number.
Number("3.14"); // Returns 3.14
Number(Math.PI); // Returns 3.141
Number(""); // Returns 0
Number("John") // Returns NaN

// Number => String

let x=123;
x.toString();
(12).toString();


// Date => String

String(Date());
console.log(Date().toString());


// Boolean => Number 

console.log(Number(false)); //returns 0
console.log(Number(true)); //returns 1


// Boolean => String

console.log(String(false));
console.log(true.toString());


// const people= new Map([
//     ["anadi" ,21],
//     ["anadi1" ,22],
//     ["anadi2" ,23],
// ])


// let text= "";
// for(const x of people){

//     text+=x+"\n";
    
// }

// console.log(text);
    




 // Sets :- JS Sets is a collection of unique values
 // Each value can only occur once in a set
 // Set are objects
// set are useful when you need to store a list of unique elements and quickly check for the existence of a specific value




// const letters = new Set(["a","b","c","d"]);
// console.log(letters);


// letters.add("e");
// letters.add("d");
// console.log(letters);

// let textSet="";
// for(const x of letters){
//     textSet+=x + "\n";
// }

// console.log(textSet);


// Set Methods

// .has() method :- returns true if a specified value exists in a set.

// let answer = letters.has("f");
// console.log(answer);
// console.log(letters.has("d"));


// .forEach() method invokes a function for each Set elements:

// let text1="";
// letters.forEach(function(value){
//     text1+=value;
// })

// console.log(letters);


// .values() method returns an Iterator(array like structure) object with the values in a Set.

// const valueIterator = letters.values();

// let textValue="";
// for(const values of valueIterator){

//     textValue+=values;
// }

// console.log(textValue);


// .keys() method returns an Iterator object made with the keys of the set

// const keyIterator = letters.keys();

// let textKey="";
// for(const key of keyIterator){
//     textKey+=key;
// }

// console.log(textKey);



// .entries() :- method entries() method is supposed to return a [key,value] pair from an object.

// const myIterator = letters.entries();
// let textEntries = "";
// for (const entry of myIterator) {
//   textEntries+= entry;

// }
// console.log(textEntries);



let sFav = 20 ;
let fFav = 35 ;

console.log(fFav > sFav);
console.log(fFav < sFav);
console.log(fFav >= sFav);
console.log(fFav <= sFav);
console.log(fFav === sFav);
console.log(fFav !== sFav);
console.log(fFav == sFav);
console.log(fFav != sFav);




// new things

// String

//Appending

let fName = " Anadi";

fName += " something else ";

console.log(fName);
