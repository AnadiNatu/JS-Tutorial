// createElement

// const h1 = document.createElement("h1");
// h1.textContent="hello yo  ";
// h1.classList.add("btn-primary","btn-secondary");
// console.log(h1.classList);


// // appenChild - this method of document will add a element inside the scope of the parent element at the end . 

// const body = document.body;
// body.appendChild(h1);


// insertBefore -

// const ul = document.querySelector("ul");

// const newLI = document.createElement("li");
// newLI.innerText="New List Item";
// ul.appendChild(newLI);

// const firstLi = document.querySelector("li");

// ul.insertBefore(newLI,firstLi); // first para - what you need to add , second para - before which you want the element



// insertAdjacentElement


// const p = document.querySelector("p");
// const i = document.createElement("i");
// const i2 = document.createElement("i");
// const i3 = document.createElement("i");
// const i4 = document.createElement("i");
// const i5 = document.createElement("i");


// i.innerText = "im Italics";
// i.style.color = "skyblue";

// i2.innerText = "im Italics";
// i2.style.color = "green";

// i3.innerText = "im Italics";
// i3.style.color = "lime";

// i4.innerText = "im Italics";
// i4.style.color = "red";

// i5.innerText = "im Italics";
// i5.style.color = "yellow";

// p.insertAdjacentElement("beforebegin" ,i);
// p.insertAdjacentElement("afterbegin" ,i2);
// p.insertAdjacentElement("afterend" ,i3);
// p.insertAdjacentElement("beforeend" ,i4);
// first para - where , second para - what




// append & prepend


// let section =  document.querySelector("section");
// const i = document.createElement("i");

// i.innerText = "im Italics";
// i.style.color = "skyblue";


// section.append(i);

// const h4 = document.createElement("span");

// h4.innerHTML="Html";
// h4.style.color="crimson";

// section.append(h4);

// section.prepend(h4);





// remove() & removeChild()

const newList = document.querySelector(".new-list");
const fourth = document.querySelector(".fourth");

newList.removeChild(fourth); // removes specified child

 newList.remove();// removes all the child in the childs
