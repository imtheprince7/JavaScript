 /* Singleton:- Whenever we create object using Literal then it won't create singleton object
                Only using "NEW" keyword we create singleton object of the class.
 */
// Object Literals

const JsUser ={
    firstName: "Prince",
    lastName: "Kumar",
    "full name": "Prince Kumar",
    age: 25,
    email: "prince@siemens.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};
    // ----------- WAYS to access the value of the object
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);

// ----------- TAKE "SYMBOL" and use as a "KEY"   ------------------------

const mySymbol = Symbol("Key1");
const jsUser = {
    name: "Prince Kumar",
    [mySymbol]: "Symbol as a Key"
};

console.log(jsUser[mySymbol]);


// --------------- How to LOCK all values of the object   -------------------

// Object.freeze(jsUser)

jsUser.email = "prince@microsoft.com"
console.log(`After changing the EmailID: ${JsUser["email"]}`);

// ------------- FUnction in Object ------------------
JsUser.greeting = function(){
    console.log("Hello Js Learner users");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());


JsUser.greetingAddName = function(){
    console.log(`Hello Mr. ${this.email}`);
}


console.log(JsUser.greetingAddName());