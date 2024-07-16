function calculateCartPrice(... nums){  
    let result = 0 ;  
    for(let i=0; i<nums.length; i++){
        result += nums[i];
    }
    return result;
}
console.log(`Calculated Price is: ${calculateCartPrice(100,200,300,400,500,600,700)}`);
let totalCartPrice = calculateCartPrice(100,200,300,400,500,600,700)

function getUserName(username){
    if(!username){
        console.log(`Please enter username`)
    }
    else
        return `Mr. ${username}`
}
let username = getUserName("Prince Kumar")

console.log(`Username is ${username}\ntotal cartPrice is ${totalCartPrice}`);

const greetings ="Prince Kumar"
let totalChar =0;
for (const greet of greetings) {
    if(greet == ' ')
        break;
    totalChar += 1;
    console.log(`Each char is: ${greet}`);    
}
console.log(`Total chars in Greetings are: ${totalChar}`);

