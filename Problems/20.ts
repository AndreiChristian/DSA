`
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 determine if the input string is valid.
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
`;

function isValid(s: string): boolean {
  if (s.length % 2 === 1) {
    return false;
  }

  const paranthesis: any = { "{": "}", "[": "]", "(": ")" };

  const stack: string[] = [];

  for (const char of s) {
    if (char === "{" || char === "(" || char === "[") {
      stack.unshift(char);
    } else {
      if (char === paranthesis[stack[0]]) {
        stack.shift();
      } else {
        console.log(char);
        return false;
      }
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;
}

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("()]{]}"));
console.log(isValid("(("));
