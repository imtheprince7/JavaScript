//const tinderUser = new Object();    // Provide SingleTon Object
const tinderUser = { }             // Doesn't procide SingleTon Object
console.log(typeof tinderUser);

tinderUser.id = "prinsu111"
tinderUser.name = "Prince Singh"
tinderUser.isLoggined = false

// console.log(tinderUser);


const regularUser ={
    email: "sam@gmail.com",
    fullname:{
        userFullName:{
            firstName:"sam",
            lastName:"Curan"
        }
    }
}

console.log(regularUser.fullname.userFullName.firstName);
console.log(regularUser["fullname"]["userFullName"]["lastName"]);


const obj1 = {
    1: "a",
    2:"b",
    3:"c",
    4:"d"
}

const obj2 ={
    5:"e",
    6:"f",
    7:"g",
    8:"h"    
}
const obj3 ={
    9:"i",
    10:"j"
}

const objectFinal = Object.assign({ }, obj1, obj2, obj3)
console.log(objectFinal);

const objFinal = {...obj1, ...obj2, ...obj3}
console.log(objFinal);





console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

