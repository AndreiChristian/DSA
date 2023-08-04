/*

Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


 

Example 1:

Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
Example 2:

Input: digits = ""
Output: []
Example 3:

Input: digits = "2"
Output: ["a","b","c"]
 

Constraints:

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].

*/

const map:{[key:string]:string} = {
  "2":"abc",
  "3":"def",
  "4":"ghi",
  "5":"jkl",
  "6":"mno",
  "7":"pqrs",
  "8":"tuv",
  "9":"wxyz",
}

function combine( currentString:string[], digits:string, index:number, combinations:string[]){

  if(index === digits.length ){
    combinations.push(currentString.join(""))
    return
  }

  const currentDigit = digits[index]

  for(const values of map[currentDigit] ){
    currentString.push(values)
    combine(currentString, digits, index + 1, combinations)
    // currentString.pop()
  }


}

function letterCombinations(digits: string): string[] {

  if (digits.length === 0) return []

  const combinations:string[] = []; 

  combine([],digits, 0, combinations)

  return combinations;

}

console.log(letterCombinations("23"))
console.log(letterCombinations(""))
console.log(letterCombinations("2"))
