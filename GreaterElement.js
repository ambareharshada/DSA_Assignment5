const list = [4, 5, 2, 25];

function findGreaterElement(array) {
    let temp;
    for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        temp = array[j];
        break;
      }
    }
    console.log("Next Greater Element of i = ",array[i] , "---", temp);
  }
}

findGreaterElement(list);
