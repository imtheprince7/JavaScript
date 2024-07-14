// """"""""""""""""  Types of DataType    """"""""""""""""
/*  1. Primitive       2. Non-Primitive

'''''''''  PRimitive '''''''''''
String
Number
Boolean
Null     :  It's a value which is empty now.
undefined:  Declare but not assigned a value.
BigInt:          



''''''''''''''  Non-Primitive ''''''''''''''''''''''
Reference
Arrays
Objects
Functions


      Wanna become the master in JavaScript :       Objects,  Browser:- WebEvent, BrowserEvent


*/



// ''''''''''''''''''''''   Practice  '''''''''''''''''''''''''''
// Non-Primitive:

const myArray = [24,25,26,27,28,29];
let myObj  = {
        name: "prince kumar",
        age:    26
    };


    console.log(typeof myArray);
//  ''''''''''' TypeOf dataTypes ''''''''''''

/*
'' Types of Value''     Results

    Undefined           "Undefined"
    Null                "Object"
    Boolean             "boolean"
    Number              "number"
    String              "string"
    Non-Primitive       "Object"
    Function            "object-Function"

*/



/* ++++++++++++++++++++++++++++++++ MEMEORY MANAGEMENT   -----------------------------------
    01  Stack   (Primitive), 
    02. Heap    (Non-Primitve)
    
  Stack ---> Those variable comes under Stack- where we get COPY of the variable's value.
  Heap  ---> Those variable comes under HEAP- where we get REFERENCE of the variable's value( ORIGINAL VALUE).

*/
//      ------  Primitive-Data-Type Examples   -----------

let myName = "Prince Kumar"
let updatedName = myName;

console.log(myName);
console.log(updatedName);

updatedName = "Karan Singh";

console.log(myName);
console.log(updatedName);

//      ------  NON- Primitive-Data-Type Examples   -----------

let user1 ={
    emailId: "user@gmail.com",
    upiId: "user1@upiid"
}

let user2 = user1;
console.log(user1);
console.log(user2);

user2.emailId = "userEmailIdUpdated@gmail.com"
console.log(user1);
console.log(user2);

// Here we directly modified the value from user2 variable for User1-Variable.
