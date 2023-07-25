function evalRPN(tokens: string[]) {
  const stack: number[] = [];

  // const set = new Set<string>();
  // set.add("/");
  // set.add("*");
  // set.add("-");
  // set.add("+");

  while (tokens.length > 0) {
    const currentElement = tokens.shift()!;

    switch (currentElement) {
      case "/": {
        const lastElement = stack.pop()!;
        const secondLastElement = stack.pop()!;

        console.log(
          secondLastElement,
          lastElement,
          secondLastElement / lastElement
        );

        // stack.push(Math.floor(secondLastElement / lastElement));

        let result = secondLastElement / lastElement;

        if (result > 0) {
          result = Math.floor(result);
        } else {
          result = Math.ceil(result);
        }
        stack.push(result);

        break;
      }
      case "*":
        {
          const lastElement = stack.pop()!;
          const secondLastElement = stack.pop()!;

          console.log(
            secondLastElement,
            lastElement,
            secondLastElement * lastElement
          );
          stack.push(secondLastElement * lastElement);
        }
        break;
      case "+": {
        const lastElement = stack.pop()!;
        const secondLastElement = stack.pop()!;

        console.log(
          secondLastElement,
          lastElement,
          secondLastElement + lastElement
        );
        stack.push(secondLastElement + lastElement);
        break;
      }
      case "-": {
        const lastElement = stack.pop()!;
        const secondLastElement = stack.pop()!;

        console.log(
          secondLastElement,
          lastElement,
          secondLastElement - lastElement
        );

        stack.push(secondLastElement - lastElement);
        break;
      }
      default: {
        stack.push(parseInt(currentElement));
        break;
      }
    }
  }

  return stack[0];
}

const tokens3 = [
  "10",
  "6",
  "9",
  "3",
  "+",
  "-11",
  "*",
  "/",
  "*",
  "17",
  "+",
  "5",
  "+",
];
const tokens2 = ["4", "13", "5", "/", "+"];
const tokens1 = ["2", "1", "+", "3", "*"];

console.log(evalRPN(tokens1));
console.log(evalRPN(tokens2));
console.log(evalRPN(tokens3));
