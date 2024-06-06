let expr = "*+AB-CD";

function prefixToInfix(expr) {
  let stack = [];

  for (let i = expr.length - 1; i >= 0; i--) {
    let temp = expr[i];
    // console.log(" before temp",temp);

    if (
      expr[i] == "+" ||
      expr[i] == "-" ||
      expr[i] == "*" ||
      expr[i] == "/" ||
      expr[i] == "^"
    ) {
      console.log(stack[stack.length - 1]);
      let val1 = stack[stack.length - 1];
      stack.pop();
      let val2 = stack[stack.length - 1];
      stack.pop();

      // Concat the operands and operator
      let result = "(" + val1 + temp + val2 + ")";
      stack.push(result);
    } else {
      stack.push(temp + "");
    }
  }
  return stack[stack.length - 1];
}
let resultFinal = prefixToInfix(expr);
console.log(resultFinal);