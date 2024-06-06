let arr = [34, 3, 31, 98, 92, 23];

function sortElements(arr) {
  let temp = [];
  do {
    let tempElements = arr.pop();

    while (temp.length > 0 && temp[temp.length - 1] > tempElements) {
      arr.push(temp[temp.length - 1]);
      temp.pop();
    }
    temp.push(tempElements);
  } while (arr.length > 0);
  return temp;
}
let result  = sortElements(arr);
console.log(result);
