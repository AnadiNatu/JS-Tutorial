// const d = new Date();
// console.log(d); //returns current date and time

// const d1=new Date("2022-03-25");
// console.log(d1);


// const d2 = new Date("October 13, 2014 11:13:00");
// console.log(d2);


// creating date from a date object from a string

// const d4 = new Date("August 12, 2009 ,12:45:21");
// console.log(d4);


// const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// // 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
// console.log(d);

// ISO - international standard for representation of dates and time
// ** SYNTAX used in JS - (YYYY-MM-DD)

const date = new Date();
console.log(date.toDateString());
console.log(date.toLocaleString());


// date.setDate(date.getDate()+1);
// console.log(date);

const yesterday = date.setDate(date.getDate() - 1);
console.log(yesterday.toLocaleString());


// const d = new Date("03/25/2015");

// const d1 = new Date("2015"); //Years only
// const d2 = new Date("2015-03"); //Years and months only

// let Jan01_1970 = new Date(0); // this converts the variable into an date

// console.log(Jan01_1970);


// let Dec31_1969 = new Date(-24*3600*1000) ;  // this will return day substracted by one , than the specified date
// console.log(Dec31_1969);


// //some methods for dates 


// let now  = new Date();
// console.log(now.getFullYear()); // gets the year of the date 
// console.log(now.getMonth()); // similarly months
// console.log(now.getDay()); // similarly days

// const d = new Date("2021-03-25");
// console.log(d.getHours());


const d  = new Date();
let diff = d.getTimezoneOffset();
console.log(diff);

