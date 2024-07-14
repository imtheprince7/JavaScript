/*   """"""""""   Arrays """"""""""   */

const marvel_heros = ["Thor", "IronMan", "SpiderMan"]
const dc_heros = ["SuperMan", "Flash", "BatMan"]

// merging 2nd Array elements in 1st Array
// marvel_heros.push(dc_heros)
console.log(marvel_heros);

// merging 2nd Array elements in 1st Array USING CONCAT Method
const all_heroes = marvel_heros.concat(dc_heros)
console.log(all_heroes);

// BEST APPROACH (industry Practice)
        //  SPREAD OPERATOR  //

const  all_heros = [...marvel_heros, ...dc_heros]
console.log(all_heros);
 


// ---------------   WEB SCRAPPING  -------------------------
console.log(Array.isArray("Prince Kumar")); // Return boolean value

console.log(Array.from("Prince Kumar"));// Convert into Arrays

console.log(Array.from({
    name: "Prince Kumar",
    age: 26

}));   // It returns [] arrays if not converted into Arrays
      // So we have to specify in which type we want to conver ( Key, Value, etc....) 

let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1,score2,score3));

