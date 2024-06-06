
let expr = "a+b*c+d";
// let expr = "a+b*(c^d-e)^(f+g*h)-i";
function prefixToPostfix(expr) {
  let operatorStack = [];
  let operand = [];
  let result = "";

  for (let i = 0; i < expr.length; i++) {
    let val = expr[i];

    if (expr[i] == "+" || expr[i] == "*" || expr[i] == "^" || expr[i] == "-" || expr[i] == "(" || expr[i] == ")") {
      if (operatorStack.includes(expr[i])) {
        while (operatorStack.length > 0) {
          let old = operatorStack.pop();
          operand.push(old);
        }
        // operatorStack.push(expr[i]);
        // old = operatorStack.pop();
        // if (operand.includes(expr[i + 1])) {
        // operand.push(expr[i]);
        // }

        // console.log(operatorStack);
        // if (operand.includes(expr[i + 1])) {
        //   console.log(expr[i]);
        //   operand.repeat(expr[i]);
        //   console.log("log",operand);
        // }
      } else {
        operatorStack.push(expr[i]);
        // console.log(operatorStack, "operator stack");
      }
    } else {
      operand.push(expr[i]);
      console.log(operand, "operand");
        
      result = operand.toString();
     let newText = result.replace(/,/g, " ");
        // console.log(result);
        // console.log(newText);

    }
  }
}

prefixToPostfix(expr);
