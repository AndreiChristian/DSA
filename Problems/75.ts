/*
A valid number can be split up into these components (in order):

A decimal number or an integer.
(Optional) An 'e' or 'E', followed by an integer.
A decimal number can be split up into these components (in order):
(Optional) A sign character (either '+' or '-').
One of the following formats:
One or more digits, followed by a dot '.'.
One or more digits, followed by a dot '.', followed by one or more digits.
A dot '.', followed by one or more digits.
An integer can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One or more digits.

For example, all the following are valid numbers: 

["2", "0089", "-0.1","+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"],

while the following are not valid numbers:

["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].

Given a string s, return true if s is a valid number.

 

Example 1:

Input: s = "0"
Output: true
Example 2:

Input: s = "e"
Output: false
Example 3:

Input: s = "."
Output: false
 

Constraints:

1 <= s.length <= 20
s consists of only English letters (both uppercase and lowercase), digits (0-9), plus '+', minus '-', or dot '.'.

*/

function isNumber(s: string): boolean {
  let hasSign = false;
  let hasE = false;
  let hasDot = false;
  let mustBeInteger = false;
  let hasDigit = false;

  let hasDigitAfterE = false;

  let i = 0;

  while (i < s.length) {
    const pv = parseInt(s[i]);

    if (isNaN(pv)) {
      switch (s[i]) {
        //
        case "e": {
          if (!hasDigit) {
            return false;
          }

          if (hasE) {
            console.log("There is already an e/E");
            return false;
          }
          mustBeInteger = true;
          hasE = true;
          break;
        }
        //
        case "E": {
          if (!hasDigit) {
            return false;
          }
          if (hasE) {
            console.log("There is already an e/E");
            return false;
          }
          mustBeInteger = true;
          hasE = true;
          break;
        }

        case ".": {
          if (hasDot) {
            console.log("There is already a dot");
            return false;
          }
          if (mustBeInteger) {
            console.log(
              "The number must be integer as there was an e/E spotted before"
            );
            return false;
          }
          hasDot = true;
        }

        case "+": {
          if (i > 0 && (s[i - 1] === "+" || s[i - 1] === "-") && s[i] !== ".") {
            console.log("There cannot be two consecutive signs");
            console.log(s[i - 1], s[i]);
            return false;
          }

          if (
            hasDigit === true &&
            (s[i - 1] !== "e" || s[i - 1] !== "E") &&
            s[i] !== "."
          ) {
            if (s[i - 1] !== "e" && s[i - 1] !== "E") {
              if (s[i] !== ".") {
                console.log(
                  `The fact that there is already a number is ${hasDigit} and the previous char is ${
                    s[i - 1]
                  } and the position is ${i}`
                );
                return false;
              }
            }
          }

          hasSign = true;

          break;
        }
        case "-": {
          if (i > 0 && (s[i - 1] === "+" || s[i - 1] === "-") && s[i] !== ".") {
            console.log("There cannot be two consecutive signs");
            console.log(s[i - 1], s[i]);
            return false;
          }

          if (
            hasDigit === true &&
            (s[i - 1] !== "e" || s[i - 1] !== "E") &&
            s[i] !== "."
          ) {
            if (s[i - 1] !== "e" && s[i - 1] !== "E") {
              if (s[i] !== ".") {
                console.log(
                  `The fact that there is already a number is ${hasDigit} and the previous char is ${
                    s[i - 1]
                  } and the position is ${i}`
                );
                return false;
              }
            }
          }

          // if (
          //   hasDigit === true &&
          //   (s[i - 1] !== "e" || s[i - 1] !== "E") &&
          //   s[i] !== "."
          // ) {
          //   console.log(
          //     `The fact that there is already a number is ${hasDigit} and the previous char is ${
          //       s[i - 1]
          //     } and the position is ${i}`
          //   );
          //   return false;
          // }

          hasSign = true;

          break;
        }
        default:
          console.log("other character than e/E, . , +, - found");
          return false;
      }
    } else {
      // console.log("The value is number ", pv);
      if (!hasDigit) {
        hasDigit = true;
      }
      if (hasE) {
        hasDigitAfterE = true;
      }
    }

    i++;
  }

  if (!hasDigit) {
    console.log("There must be at least a digit");
    return false;
  }

  if (!hasDigitAfterE && hasE) {
    console.log("There must be a digit after e");
    return false;
  }

  return true;
}

const validInputs = [
  "2",
  "0089",
  "-0.1",
  "+3.14",
  "4.",
  "-.9",
  "2e10",
  "-90E3",
  "3e+7",
  "+6e-1",
  "53.5e93",
  "-123.456e789",
  "0",
];

const invalidInputs = [
  "abc",
  "1a",
  "1e",
  "e3",
  "99e2.5",
  "--6",
  "-+3",
  "95a54e53",
  "e",
  ".",
];

const stack: string[] = [];

for (const v of validInputs) {
  if (!isNumber(v)) {
    stack.push(v);
  }

  console.log(
    v,
    isNumber(v),
    "expected:true",
    isNumber(v) === true ? "🟩" : "🆘"
  );
}

for (const i of invalidInputs) {
  if (isNumber(i)) {
    stack.push(i);
  }

  console.log(
    i,
    isNumber(i),
    "expected:false",
    isNumber(i) === false ? "🟩" : "🆘"
  );
}

console.log("------------------");
console.log("------------------");
console.log("------------------");

console.table(stack);

console.log(
  `Num of wrong values : ${stack.length} / ${
    validInputs.length + invalidInputs.length
  }`
);

// console.log(isNumber("-.9"));
console.log(isNumber("3."));

// const stupidArray: string[] = [];

// for (let i = 0; i < 100; i++) {
//   const value = Math.random();

//   if (value < 0.3) {
//     stupidArray.push("+");
//   } else if (value < 0.6) {
//     stupidArray.push("-");
//   } else {
//     stupidArray.push(".");
//   }
// }

// const values = [".", "-", "+"];

// for (const s of stupidArray) {
//   let numOfEquals = 1;

//   for (const v of values) {
//     if (s === v) {
//       numOfEquals++;
//     }
//   }

//   console.table({
//     Value: s,
//     "Equal to .": s === ".",
//     "Equal to -": s === "+",
//     "Equal to +": s === "-",
//     Ok: numOfEquals > 1 ? "🟩" : "🆘",
//   });
// }
