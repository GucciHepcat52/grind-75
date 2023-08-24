function evalRPN(tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] == "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (tokens[i] == "-") {
      stack.push(-stack.pop() + stack.pop());
    } else if (tokens[i] == "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (tokens[i] == "/") {
      stack.push(Math.trunc(1 / (stack.pop() / stack.pop())));
      // The Math.trunc() static method returns the
      //integer part of a number by removing any
      //fractional digits.
    } else stack.push(parseInt(tokens[i]));
  }

  return stack[0];
}

evalRPN(["2", "1", "+", "3", "*"]);
