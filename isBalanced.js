function isBalanced(expr) {
  let stack = [];

  for (let i = 0; i < expr.length; i++) {
    let temp = expr[i];

    if (temp == "(" || temp == "[" || temp == "{") {
      stack.push(temp);
      // continue;
    }

    let check;
    switch (temp) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  return stack.length == 0;
}

let expr = "{[()]}"; // {[(])}     {[()]}
let finalResult = isBalanced(expr);

console.log(finalResult);
