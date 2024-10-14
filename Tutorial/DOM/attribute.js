

// href

const a = document.querySelector('a');
const href = a.href;
console.log(a.href='www.exampleSite.com');
console.log(href);

// if we have no href we will not get any href


// value

const input = document.querySelector('input');
console.log(input.value);


// type

console.log(input.type);



// Changing attributes 
// syntax - element.attribute = new value (Change the attribute value of an HTML element )
// syntax - element.style.property = new style (Change the style of an HTML element)

//element.setAttribute(attribute,value) (Change the attribute value of an HTML element)

console.log((input.setAttribute('style' , 'background:black')))

// a.href = 'https://www.youtube.com/watch?v=_Oz-2jkwJQU&t=1275s';


// console.log((input.value = 'Bye'));
console.log((input.type = 'password'));

console.log((input.placeholder = 'Please Enter your Password'));


// getAttribute()

console.log((input.getAttribute('placeholder')));

console.clear();
// 

const a1 = document.querySelector("a");

console.log(a1.getAttribute("href"));

a1.setAttribute("href","www.twitter.com");