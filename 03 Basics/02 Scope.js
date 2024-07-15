/*      ----------------- SCOPE of Variable --------------------------- 
Let :-  Scope of the "LET" keyword is limited to curley braces
        It's basically comes under LOCAL scope keyword

Var :-  Scope of the "VAR" keyword is throughout the program.
        It's basically comes under GLOBAL scope keyword(variable).


CONSt :-  Scope of the "CONST" keyword is limited to curley braces
          It's basically comes under LOCAL scope keyword(variable).



*/


let a = 300;
if (true) {
    // console.log(a);
    let a = 10
    
console.log(a);
    const b = 20
    var c = 30    
}

console.log(a);
// console.log(b);
console.log(c);   


function one(){
    const username = "Prince"
    function two(){
        var lastname ="Kumar"
        console.log(username);
        console.log(lastname);
    function three(){
        console.log(`Hello three ${lastname}`);
        }
        three()
    }
    
    function four(){
        console.log(`Hello Four ${lastname}`);
    }
    two()
   
    four()
}

console.log(one());

