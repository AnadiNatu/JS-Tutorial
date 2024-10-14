const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){

    if(inputBox.value === ''){
        alert("You must write something"); // If we try to add an empty string
    }else{
        let li = document.createElement("li"); // this line make a html element with the tag <li>
        li.innerHTML = inputBox.value; // In this line we are adding the input from the input box in the <li> tag to be displayed as list 
        listContainer.appendChild(li);  // and when we want to display the list . We will do so in listContainer . the li element under this container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value="";
    saveData();
}


listContainer.addEventListener("click",function(e) { // This event istner will check were in the list container we have clicked
    if(e.target.tagName === 'LI') {// If we have clicked an list item

        e.target.classList.toggle("checked"); // If clicked we add the Checked class list 
        saveData();

    }else if(e.target.tagName === 'SPAN'){ // If we click the close(Span ) tag it will remove the element from the list  

        e.target.parentElement.remove();
        saveData();

    }
}, false);


function saveData(){
localStorage.setItem("data" , listContainer.innerHTML); // this function will store the data in the local storage , so even if refresh the page the data will be there
}

// and any time we add some new task we should call this function to save the new data in the browser



// we will have to display that data when we refresh that page again 

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();

