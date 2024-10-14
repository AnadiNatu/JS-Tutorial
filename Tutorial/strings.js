// let text = "He is what you call a \"King\" ";
// console.log(text);

// let newLine = " Here is a sentence .\n  Here is another sentence";
// console.log(newLine);

// let text1 = `The quick
// brown fox
// jumps over
// the lazy dog`;

// console.log(text1);


// let x = "John";
// let y = new String("John"); // these two are not same
// if(x===y){
//     console.log(true);
// }else{
//     console.log(false);}



//String Methods


//charAt() , .charCodeAt()

// let text = "HELLO WORLD";
// console.log(text.charAt(1));
// console.log(text.charCodeAt(1));

// const name = "W3Schools";
// console.log(name.at(2));



// .slice()

// let text = "Apple, Banana, Kiwi";
// let part = text.slice(5,10); // First - Start position to cut from , Second - End position to cut 
// console.log(part);
// console.log(text.slice(5));
// console.log(text.slice(-5)); // (-)ve values start from the behind



//  .substr() - First para specifies the startig point , Second para - define the length of the extracted part

// let str = "Apple, Banana, Kiwi";
// let part = str.substr(7);
// console.log(part);

// .toUpperCase() & .toLowerCase()

// let text1 = "Hello World!";
// let text2 = text1.toUpperCase();
// console.log(text2);

// .trim() , .trimStart() , .trimEnd() :-  removes whitespace from both sides of a string . trimStart() method works like trim(), but removes whitespace only from the start of a string. 

// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2);


// .repeat() :- returns a string with a number of copies of a string

// let text = "Hello world!";
// let result = text.repeat(2);

// console.log(result);


// .replace() :- method replaces a specified value with another value in a string:
// .replace() method replaces only the first match
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "W3Schools");
// console.log(newText);





// .replaceAll() :- method replaces all the occurances of the specified string

// let text = "I love cats. Cats are very easy to love. Cats are very popular";
// console.log(text.replaceAll(/Cats/g , "dogs") );

//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.


// .split() :- method converts a string into an array , param - must be the separator 
// If the separator is "", the returned array will be an array of single characters:

// let vname = "Assjd";
// console.log(vname.split('')); // empty quote means that separate each letter into indivisual character array 

// console.log(vname.split("").join("-"));



// let text = "a,b,c,d,e,f";
// const myArray = text.split("");
// console.log(myArray);

// let words = " A sentence is whatever you think.";
// const wordInArray= words.split(' ');
// console.log(wordInArray);




// .indexOf() method :- returns position of the first occurence of a string in a string , returns -1 if string not found
// .lastIndexOf() method :- ndex of the last occurrence of a specified text in a string.
// let text = "Please locate where 'locate' occurs!";
// console.log(text.indexOf("locate"));
// console.log(text.lastIndexOf("locate"));



// .search() :- method method searches a string for a string (or a regular expression) and returns the position of the match
// The two methods are NOT equal. These are the differences:

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).



// console.log(text.search("locate"));
// console.log(text.search(/locate/)); //regular exprression can also be searched



// .match() :- method returns an array containing the results of matching a string against a string

// let text = "The rain in SPAIN stays mainly in the plain";

// console.log(text.match("ain"));
// console.log(text.match(/ain/));
// console.log(text.match(/ain/g)); // global search
// console.log(text.match(/ain/gi)); // global case-insensitive search


// .include() :- returns true if a string contains a spefied value .

// let text = "Hello world, welcome to the universe.";
// console.log(text.includes("world"));
// console.log(text.includes("the" , 12)); // first param - specified string to be searched , second param - starting position



// .startsWith() :- as the name suggest , and returns true
// .endsWith() :- ast the name suggests ,  and also returns true
//and endsWith() method is case insensitive



// console.log(text.startsWith("Hello"));
// console.log(text.startsWith("world" , 12)); //second param :- specifies the starting position
// console.log(text.endsWith("universe"));


// Variable Substitution

// let fName = "John";
// let lName = "Doe";

// let text = `Welcome ${fName}  ${lName}`;
// console.log(text);


let price = 10;
let VAT = 0.25;

let total = `Total ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);

// Automatic replacing of expressions with real values is called string interpolation.

console.log('hello'      ); 


// Variaable substitution exercise 


let qName = "Dpifw" ;
let tName = "dpdww";

let stringTest = `My favorite actor ${qName}  ${tName} & say something nice about him`;

console.log(stringTest);


let stringTest2 = `${stringTest} , his best movie is Silicon Valley `;

console.log(stringTest2);



function the(){
    console.log(`Hello`);
}

console.log(` ${the}`); // reference of the function

console.log(`${the()}`); // calling & executing those files
