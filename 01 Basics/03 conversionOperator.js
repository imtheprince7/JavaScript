let score = "33";
console.log(typeof(score));
console.log(typeof score);


/*
    """""""""" CONVERSION_OUTPUT """"""""""
    "33"    => [ STring to Number]   => 33 ( Number)
    "33abc" => [ STring to Number]   => NaN ( Not-A-Number)
    true    => [ Bool to Number]     => 1 ( False = 0)
    
*/

let isLoggedIn = 1;
let checkValue = Boolean(isLoggedIn)
console.log(checkValue);

/*
        """""""""" CONVERSION_OUTPUT """"""""""
    1 => true; 0 => false
    ""  => false
    "Prince" => True

*/


// """"""""""""""""""" OPERATIONS """"""""""""""""""""
let value = 3;
let negValue = -value;
console.log(negValue);

// """"""""""""""""""""" TRICKY """""""""""""""""""

console.log(1+"2");     // 12
console.log("1"+2);     // 12
console.log(1+2+"2");   // 32
console.log("1"+2+3);   // 123



