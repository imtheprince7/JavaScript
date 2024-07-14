let myDate = new Date()
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.getFullYear()); 

// How to declare specific date:

let myCustomDate = new Date(2024, 7, 11)
let myCustomDate2 = new Date(2024, 7, 12, 5,10)
let myCustomDate3 = new Date("2024-07-14")  // GLobal Standard
let myCustomDate4 = new Date("07-14-2024")  // Indian Standard
console.log(myCustomDate.toDateString());


// ========== TimeStamp =============
// It's useFul during Quiz / Poll who has submitted first among the all.


let myTimeStamp = Date.now();
console.log(myTimeStamp);

console.log(myCustomDate.getTime());

let timeDifference = myCustomDate - myTimeStamp
console.log(`Current TIme =${timeDifference.toString() }`);