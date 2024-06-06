const array1 = [1,2,3,6,8,];
const arrayLength = array1.length;
const _ = require('lodash');


console.log("Original Array = ",array1);

array1.push(7,9);
console.log("Array after Push Method = ",array1);
array1.pop();
console.log("Array after Pop Method = ",array1);
array1.peek();
console.log("Array after Peek Method = ",array1);

// to use isEmpty we need to install 'npm install lodash' library
console.log("The Value of is Empty :" + _.isEmpty(array1))