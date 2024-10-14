// Flow control


//   let a = 1;
//   let b = 1.9;

//   const result = a>=b;

//   if(result){
//     console.log("A is greater");
//   } else {
//     console.log('B is greater');
//   }

 // Switch Case 

 let job = 'Manager';

   switch(job){
    case 'Software Developer' : console.log("Writes Code");
    break;
    case 'Cloud Engineer': console.log("Manages and deploys cloud resources");
    break;
    case 'Designer' : console.log("Makes user interface documents");
    break;
    default : console.log("Works with customer");
   }








  //  let jumble = 'tyedasu';

  //  let dayArray = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

  //  for (let i = 0 ; i <dayArray.length ; i++){

  //   let j = 0;
  //   let jumbleToTest = jumble.toUpperCase().split("");


  //   for(j = 0 ; j<jumbleToTest.length ; j++){
     

  //     let dayToTest = dayArray[i].toUpperCase().split("");
  //     let dayToTestLength = dayToTest.length;
  //     let day = "";


  //     if(jumbleToTest.length === dayToTestLength){
  //      if(jumbleToTest[i] === dayToTest[j]){
  //       day += dayToTest[i];
  //       break;
  //      }
  //     }

  //   console.log(`the jumbled day is ${day}`);

  //   }

  //  }


  let jumble = 'tyedasu';

  let dayArray = ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];

  function sortString(str){
    return str.split('').sort().join('');
  }

  let sortedWord = sortString(jumble);

  for(let i = 0; i<dayArray.length ; i++){

    // for of loop use kar 

    let sortedDay = sortString(dayArray[i]);

    if(sortedWord === sortedDay){
      console.log(`this jumble day is ${dayArray[i]}`);
    }
  }


  let y = 10 ;

  while(y<=100){

    console.log("Anandi");

    y+=10;
  }
  





  // Tertiary Operator
// Only JS operator that takes three operands ; a cond followed by ? an expression to be executed if cond is true , followed by a : , the expression is to be exeuted if the condition is false 


let hasMony = true;

let res = hasMony === true ? console.log(' Can Buy Product') : console.log('Please bring money to buy');

