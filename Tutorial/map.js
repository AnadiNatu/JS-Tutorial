const map = new Map();



// adding value to the map

const keyOne = "string";
const keyTwo = {};
const keyThree = function() {};


map.set(keyOne , " Value of key one");
  // Adds a new element with a specified key and value to the Map . If an element with the sme key already exists , the element will be updated


map.set(keyTwo , " Value for the key two");  

map.set(keyThree , "Value for the key three");  

console.log(map);

//  map methods

console.log(map.keys());
console.log(map.values());

console.log(map.size);

console.log(map.delete(keyTwo));
console.log(map);


// iterating over a map

for(let [key , value] of map){
    console.log(`${key} -- ${value}`);
};



for(let keys of map.keys()){

    console.log(keys);
}
