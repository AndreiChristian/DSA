const word = "hello";

const findFirstRepetition = (string: string) => {
  const table: any = {};

  for (const char of string) {
    if (table[char]) {
      return char;
    }
    table[char] = 1;
  }
};

console.log(findFirstRepetition(word));
