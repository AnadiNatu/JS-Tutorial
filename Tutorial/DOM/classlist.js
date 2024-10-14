// classList Properties


const h1 = document.querySelector('h1');
console.log(h1.classList );
console.log(h1.classList.length );


// add() - adds class to the tag 

// h1.classList.add("style");
// console.log(h1.classList);


// remove() -  remove th class from the tag classList

// h1.classList.remove("style");
// console.log(h1.classList);


// toggle() - If the tag doesn't has the specified class it adds it and if it is there it removes 


h1.classList.toggle("apples");
h1.classList.toggle("pot");
h1.classList.toggle("style");


