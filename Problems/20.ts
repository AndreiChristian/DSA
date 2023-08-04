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

  const stack:string[] = []

  const pairs :{[key:string]:string} = {
    ")":"(",
    "]":"[",
    "}":"{",
  }

  for(const char of s){
    if(pairs[char]){
      
      if(stack.length === 0) return false 

      if(pairs[char] !== stack[stack.length -1]) return false

      stack.pop()

    } else {

      stack.push(char)

    }
  }

  if(stack.length !== 0) return false;

  return true

}
