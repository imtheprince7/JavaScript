// --------------- Interesting ------------------------------


/*
    Here we are calling ""ADDtwo(55)"" before the function definition so,
    compiler check inside the whole program and execute 
*/
console.log(addTwo(55));
function addTwo(num){
    return num+1;
}


/*
    Here we are calling "ADDTHREE(55)"" before the function definition so,
    compiler will throw error because we are assigining the return value in 
    addThree function-variable-expression.

    ---- So Accessing without definition/declaration will throw an error.
*/
console.log(addThree(55));

const addThree = function(num){
    return num+2;
}

