const { isNumber } = require("lodash");

const expr = "231*+9-";

function postfixExpressionFunction(expr) {
  // console.log(expr);
  let temp = [];
  for (let i = 0; i < expr.length; i++) {
    let value = expr[i];
    if (!isNaN(value)) {
      // charCodeAt() returns the "Unicode" of the character at a specified position in a string
      // charCodeAt() unicode value of '0' is 48
      // charCodeAt() unicode value of '3' is 51
      temp.push(value.charCodeAt(0) - "0".charCodeAt(0));
    } else {
      let val1 = temp.pop();
      let val2 = temp.pop();
    //   console.log("val1 == val2", val1, val2);
      if (value == "+") {
        temp.push(val2 + val1);
      } else if (value == "-") {
        temp.push(val2 - val1);
      } else if (value == "*") {
        temp.push(val2 * val1);
      } else if (value == "/") {
        temp.push(val2 / val1);
      }
    }
  }
  console.log(temp);
  return temp.pop();
}
let result = postfixExpressionFunction(expr);
console.log(result);
