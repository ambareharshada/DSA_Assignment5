const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stack = [];

function mainMenu() {
  console.log(
    "\n ************************ Stack Operations Using Array *************************"
  );
  console.log("Choose one option from below...");
  console.log("1.Push \n2.Pop \n3.Show \n4.Exit");
  rl.question("Enter Your Choice : ", (choice) => {
    if (choice === "1") {
      push(choice);
    } else if (choice === "2") {
      pop();
    } else if (choice === "3") {
      show();
    } else {
      console.log("You have entered incorrect choice");
    }
  });
}

function push(choice) {
  console.log(
    "\n ************************ Push Operations Called *************************"
  );
  rl.question("Enter Number : ", function (number) {
    stack.push(number);
    console.log("ELement Pushed Successfully......");
    show();
  });
}
function pop() {
  console.log(
    "\n ************************ Pop Operations Called *************************"
  );
  if (stack.length > 0) {
    stack.pop();
    console.log("Element Poped Successfully......");
    show();
  } else {
    console.log("Stack is Empty...No Element Found to POP");
  }

  // mainMenu();
}

function show() {
  console.log(
    "\n ************************ SHOW Operations Called *************************"
  );
  if (stack.length > 0) {
    for (let i = stack.length - 1; i >= 0; i--) {
      console.log(stack[i]);
    }
  } else {
    console.log("No Element Present in Stack......");
  }
  mainMenu();
}
mainMenu();
