/*  ---------------------- Immediately Invoked Function Expression ( IIFE )

-->   It used to invoke immediately after the function 
--->*  To avoid the pollution of global scope variable inside the scope of function, we use IIFE.

-- USE CASE ----
    ==>  To connect the DB immediately after running the application.
    ==>  Can use with ArrowFunction

SYNTAX:-    (  We wrap our program inside this paranthesis. ) (  We use this to call the func. immed. )

Limitation:- We have to use ;
             to stop the end of the context of the IIFE
*/

// --------- NORMAL FUNCTION ------------------
(  function chai(){
    // This function is "NAMED IIFE"
    console.log(`Database connected.`);
} )();



// --------- ARROW FUNCTION ------------------
(  () =>{
    // This function is "UNNAMED IIFE"
    
    console.log(`Database connected using ArrowFunction`);
} )();


// --------- ARROW FUNCTION WITH PARAMETERS ------------------
(  (firstNumber, secondNumber) =>{
    console.log(`Addition of Two Number  ${firstNumber + secondNumber}`);
} )(35,45);

// That above IIFE is example of two or can say THREE IIFE in a program.
// We have to use ; to start the execution of second IIFE so that it could be run.


