// Event - JS interaction with HTML is handled through events that occur when the user or the browser manipulates a page.


const secondBtn = document.querySelector(".second-btn");
// secondBtn.onclick=alert("Hello from");
secondBtn.onmousemove = function(){
    console.log("Huxn Natu");
} 
// This is a bad way to attach event



// Best way to attach an event

const best = document.querySelector('.best');
const para = document.querySelector('.para');


// best.addEventListener("click",function(){
//     console.log("Hello World");
// })

// we can als pass function a an reference also

// function greeting(){
//     console.log("Hello");
// }

// best.addEventListener("click",greeting);

best.addEventListener("click", () => para.style.color="teal");


// submitting

const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit" , (event) => {
    event.preventDefault();
    console.log(event);
    console.log(input.value);
})