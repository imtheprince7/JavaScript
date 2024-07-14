/*   """"""""""   Arrays """"""""""   */

const myArr = [0,1,2,3,4,5,6,7,8,9,10]
const myHereo = ["IronMan", "SpiderMan", "BatMan"];

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2);
console.log(myArr);

/*  -----------------   Arrays Methods ---------------   */
myArr.push(11)
myArr.push(12)
console.log(myArr);

myArr.unshift(9)  // Shift 9 at 0th index in the array
console.log(myArr);

myArr.shift()   // Shift 1-index element right in the array
console.log(myArr);


/* Slice: it start from given RANGE & not Include outerRANGE.
          It doesn't modoify the array.   */

const myArr3 = myArr.slice(1,4);
console.log(myArr3);

/* Splice: it start from given RANGE & also Include outerRANGE.
          It remove the given range element from the array.
          It modify the array size/ element   */
          
const myArr4 = myArr.splice(1,4);
console.log(myArr4);