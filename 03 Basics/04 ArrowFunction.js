/*
    "this": this use to refer the current context value( variable within the scope).
    this--> is use only inside the object not in normal Function.

*/

const user ={
    username :"Prince",
    price :999,
    welcomeMessage : function(){
        console.log(` ${this.username}, welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username ="Kumar"
// user.welcomeMessage()
// console.log(this);

function chai(){
    let username = "prince"
    console.log(this.username);
}
    // chai()


const chaiAurCode = function(){
    let username = "prince"
    console.log(this.username);
  }
  console.log(chaiAurCode());


/*------------------------- Arrow FUnction ----------------

1. Just have to remove the function keyword and 
2. place => after the parenthesis 
3. taking the variable for the function parameter is same.


SYNTAX:-    () =>{
              //statements...
                }

    we can hold the "ARROW function" to variable.
    const variable1 = () => {
                    // statements.....    
                }
        log(variable1()) /// we have to use the variable as a function to execute the ()=> Function. 
*/


const chaiauCode = () =>{
    console.log(`Writing the ArrowFunction Syntax`);
}
console.log(chaiauCode())


// --------------------------    we can hold the "ARROW function" to variable.   ----------------------

const addTwo = (firstNumber , secondNumber) => {
    return firstNumber + secondNumber;
}

console.log(addTwo(25,52));


// IF there's oneLine code and have to return then don't use RETUEN and use { }.
// IF we use ( ) then no need to use RETURN,
// IF we use { } then have to use RETURN keyword
// TO RETURN the OBJECT have to use { } and wrap the object inside the { }

const addThree = (firstNumber, secondNumber) => (firstNumber + secondNumber)

console.log(addThree(33,34));  