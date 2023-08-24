function isValid(string) {
  if (!string || string.length < 2) {
    return false;
  }

  let stack = [];

  for (let c of string) {
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (!stack.length) {
        return false;
      }
      let last = stack.pop();

      if (c === ")" && last !== "(") {
        return false;
      }
      if (c === "]" && last !== "[") {
        return false;
      }
      if (c === "}" && last !== "{") {
        return false;
      }
    }
  }
  return !stack.length;
}

isValid("()[]{}");
