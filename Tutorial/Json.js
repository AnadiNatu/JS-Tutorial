// JSON syntax

const person = {name:"Anadi NAtu",
    age:20,
    email:"anadi@gmail.com",
    isSubscribed:true,
    hoddies:["Badminton","Running","Cooking"],
    address:{
        city:"NewYork",
        state:"New York"
    }
}
// json format 


// JSON method

// JSON.strinfy();

console.log(JSON.stringify(person));

const j=JSON.stringify(person);
const jo = JSON.parse(j);
