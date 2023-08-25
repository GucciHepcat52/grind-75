/**
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
    
    An input string is valid if:
    
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
     
    
    Example 1:
    
    Input: s = "()"
    Output: true
    Example 2:
    
    Input: s = "()[]{}"
    Output: true
    Example 3:
    
    Input: s = "(]"
    Output: false
     
    
    Constraints:
    
    1 <= s.length <= 104
    s consists of parentheses only '()[]{}'.  
    
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  let stack = [];

  for (let c of s) {
    // Check to see if the array is empty and if the string is only one character
    if (s.length < 2) return false;

    // populate the stack
    if (c === "(" || c === "{" || c === "[") {
      stack.push(c);
    } else {
      if (stack.length === 0) return false;
      // if a closing char is seen, pop off stack
      let poppedValue = stack.pop();
      if (poppedValue === "(" && c !== ")") return false;
      if (poppedValue === "{" && c !== "}") return false;
      if (poppedValue === "[" && c !== "]") return false;
    }

    // if pop off is not valid, finish

    // if gets to end and nothing bad happened, true
  }
  return stack.length === 0;
};

/*

Stack - data structure mimics a stack of papers on your desk
    First values added into stack are the last values taken off
    more recent added and more recent removed

    operations on a stack
        push = add on top of stack
        pop = remove last item pushed


    [1,2,3,4,5] -> 

    5
    4
    3
    2
    1

*/
