// setInterval - it is a function that helps us execute a function or a piece of code repeatedly after a set interval of time 


// setInterval( function )

// setInterval( () => console.log(`This code will be executed every two seconds` , 2000)) // syntax (first para - executable code , second para -  time  )


// setTimeout() - It is a function that execute our code after a specified amount of time 



// setTimeout( function (){
//     console.log("This code will be executed after 3 econd" );
// } , 3000);


// clearInterval() - This interval will stop the execution of the setInterval 


const IntervalId = setInterval(function () {
    console.log('This is One')
} , 1);

// stop interval

setTimeout(function (){
    clearInterval(IntervalId);
    console.log('Interval Stopped');
} , 4000);
