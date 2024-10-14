let number = [1,2,3,4,5,6,7];

let length = number.length;

// for(let i = 0 ; i<number.length ; i++){
    // console.log(number[i]);
// }



// let i1 = 0;
// let len = cars.length;
// let text = "";
// for (; i1 < len; ) {
//   text += cars[i1] + "<br>";
//   i1++;
// }

// diff type of execution;


//For-in Loop
//statement loop through the properties of an Object or an array


// const person = {fname:"John", lname:"Doe", age:25};
// const numbers = [45, 4, 9, 16, 25];


// let text1="";
// let text2="";
// for(let x in person){
//     text1+=person[x]; "<br>";
     
// }
// console.log(text1);

// for(let x in numbers){
//     text2+=numbers[x] + " "; 
// }
// console.log(text2);


// const object = {a:1,b:2,c:3};

// for(let elements in object){

//     console.log(`${elements} : ${object[elements]}`);
// }


//For-Of Loop 
//statemmet loops through the values of an iterable object

const cars = ["BMW", "Volvo", "Mini" ,"Range Rover","Audi"];
let language = "JavaScript";

// let text = "";
// for(let x of cars){
//     text+=x + " ";
// }

// console.log(text);


// let text = "";
// for(let x of language){
//     text+=x+" ";
   
// }
// console.log(text);



//Break & Contine statement
// for(let i = 0 ; i<10 ; i++){

//     if(i===5){
//         break;
//     }

//     console.log(i);
// }


// const obj = {a:1,b:2,c:3};
// for(let key in obj){

//     if(key === 'b'){
//         break;
//     }

//     console.log(obj[key]);    
// }



// const obj1 = [1,2,3,4,5];
// for(let key of obj1){
//     if(key === 3){
//         break;
//     }

//     console.log(key);
// }



for(let i = 0 ; i<10 ; i++){
    if(i % 2 == 0){
        continue;
    }

    console.log(i);
}  



const obj = {a:1,b:2,c:3,d:4};
for(let key in obj){

    if(obj[key] % 2 === 0){
        continue;
    }

    console.log(obj[key]);
}




function greater(n1 ,n2){

    if(n1>n2){
        console.log('The greater number is :-' + n1);
    }else{console.log('The greater number is :- ' + n2);}
        
}

const greaterNumber=greater(4,1);




function fizzBuzz(number){

    if(number%3===0 && number%5===0){
        return 'FizzBuzz';
    }else if(number%3===0){
        return 'Fizz';
    }else if(number%5===0){
        return 'Buzz';
    }else return number;

}

// console.log(fizzBuzz(45))

let arr = [15,21,54,45,67,89,1001];

for(let num = 0 ; num < arr.length ; num++){

    
    console.log(fizzBuzz(arr[num]));
}


let listNum = [1,2,3,4,5,6,7,8,9,10];

function even(num){
let evenList = [];
    for(let i of num){
        if(i%2===0){evenList.push(num[i]);}
    }
    return evenList;
}

function odd(num){
let oddList = [];
    for(let i of num){
        if(i%2!==0){oddList.push(num[i]);}
    }
    return oddList;
}


console.log(even(listNum));
console.log(odd(listNum));
