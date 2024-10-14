// Enhaced Object Literal --  are a set of enhancements to the syntax for defining objects in JS . These enhnacements make it more convenient and concise to define object properties and methods 
// You can remove the property form the declaration if value variables and property have same name 

// function user(name , age , work){
//     return {
//         name:name,
//         age:age,
//         work:work,
//         into: function(){
//             console.log(`My name is ${name} and my age is ${age}`);
//         }
//     };
// }




function user(name , age , work){
    return {
        name,
        age,
        work,
        into()  {
            console.log(`My name is ${name} and my age is ${age}`);
        }
    };
}
const anadi = user("Anadi" , 19 , "Softwre Enginer");
console.log(anadi);
console.log(anadi.into());


const aas = user("Ass" , 16 ,"Prostitute");
console.log(aas);


// const lib = {
//     sum(a,b)  {return a+b;} ,
//     multi(a,b) {return a*b}
// };

const lib = {
    sum : (a,b) =>  a+b ,
    multi : (a,b) => a*b
};

console.log(lib.sum(3,5));
console.log(lib.multi(2,8));

