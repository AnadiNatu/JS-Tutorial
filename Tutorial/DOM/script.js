console.dir(document);

// document is an object so we can access its properties


console.log(document.head);
console.log(document.title);
console.log(document.baseURI);



// Accessing the DOM 

//getElementByTagName

console.log(document.getElementsByTagName("h1"));
console.log(document.getElementsByTagName("h1").length);


//

console.log(document.getElementsByTagName("h4"));

// getElementById

console.log(document.getElementById("main"));


// 

console.log(document.getElementById("blue"));


// getElementByClassName

console.log(document.getElementsByClassName("cls"));
console.log(document.getElementsByClassName("apple")); // if the class is not present in the html file it will return empty collection 

//
console.log(document.getElementsByClassName("yellow"));

// querySelector

console.log(document.querySelector("h1")); // if u want to select the query based on tag

console.log(document.querySelector(".cls")); // if want to select a query based on class name;
console.log(document.querySelector(".gggg")); // returns null if class not present & (.) is imp for class and (#) is imp for ids

     // if we have multiple queries for the specified tag,class,id only the first one will be selected

console.log(document.querySelector("#id-1")); 


//
console.log(document.querySelector(".yellow"));


// querySelectorAll

console.log(document.querySelectorAll(".cls"));
console.log(document.querySelectorAll("li"));

console.log(document.querySelectorAll("li").length);

console.log(document.querySelectorAll("p.intro")); // this example will return all the p tag elements with class name intro


// 

console.log(document.querySelectorAll("li"));




//Storing date in variable

// let h1=document.querySelector("h1");
// console.log(h1);





// innerText , textContent , innerHTML


const p = document.querySelector('p');

console.log(p.innerText) // this method will give us the inner text written in that tag

console.log(p.textContent); // return the pure content of the element nothing other

console.log(p.innerHTML);
// innerHtml property is useful for getting or replacing the content of the HTML elements


// Changing the value of the tag(HTML elements)


const h1 = document.querySelector("h1");
h1.innerText = 'ofbowbpw;p;kpnp;n;';
h1.innerHTML = "<em> 123 </em>";


//

let firElement = document.querySelector(".first");
console.log(firElement.innerText);


// Changing attributes 
// syntax - element.attribute = new value (Change the attribute value of an HTML element )
// syntax - element.style.property = new style (Change the style of an HTML element)

//element.setAttribute(attribute,value) (Change the attribute value of an HTML element)




// Adding & Deleting Element 

//syntax - document.createElement(element) = create a HTML element
//syntax - document.removeChild(element) = Remove an HTML element
//syntax - document.appendChild(element) = Add an HTML element
//syntax - document.replaceChild(new,old) = Replace an HTML element
// syntax - document.write(text) = Write into the output stream




