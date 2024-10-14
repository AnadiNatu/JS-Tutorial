const notesContainer = document.querySelector(".note-container");
const createBtn  = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");  // this line will select all the notes and save it in the notes variable 

showNotes();

createBtn.addEventListener("click" , ()=> {  //Making the click of the button an event , on clicking the create button
    let inputBox = document.createElement("p"); // we will create an input Box <p> tag ,
    let img = document.createElement("img"); // similarly we will be adding the delete note img as well 
    inputBox.className = "input-box"; //  adding class name input-box to the input box <p> tag 
    inputBox.setAttribute("contenteditable" , "true"); // setting the attribute of the tag
    img.src = "images/delete.png"; // similarly for the img 
    notesContainer.appendChild(inputBox).appendChild(img); // adding the input box and delete img to the notes container for dispalying

})


notesContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "P"){ // these lines ar there for update the local storage even when something is written in the p tag as weel , when updating th notes , new parts should be updated as well 
        notes = document.querySelectorAll("input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})


function updateStorage(){
    localStorage.setItem("notes" , notesContainer.innerHTML);

}

function showNotes(){
    notesContainer.innerHTML = localStorage.getItem("notes");
} //  this function - to get the not from the local storage whenever the page is refreshed




document.addEventListener("keydown" , event => {
    if(event.key === 'Enter'){
        document.execCommand("insertLineBreak");  // this event listner is there to prevent the accidental saving of notes when you press enter . Pressing enter will result in a line break , not saving
        event.preventDefault();
    }
})