// Given an array of strings words and a width maxWidth,
// format the text such that each line has exactly maxWidth characters and is
// fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as
// many words as you can in each line. Pad extra spaces ' ' when necessary so that
// each line has exactly maxWidth characters.
// Extra spaces between words should be distributed as evenly as possible.
//  If the number of spaces on a line does not divide evenly between words,
// the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and
// no extra space is inserted between words.

// Note:

// A word is defined as a character sequence consisting of non-space characters only.
// Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
// The input array words contains at least one word.

function fullJustify(words: string[], maxWidth: number): string[] {
  const splittedLines: string[] = [];

  while (words.length > 0) {
    let currentLine = "";

    const nextWord = words[0];

    while (currentLine.length < maxWidth - nextWord.length) {
      currentLine = currentLine + words.shift()! + " ";
    }
    splittedLines.push(currentLine);
  }

  return splittedLines;
}

const words1 = ["This", "is", "an", "example", "of", "text", "justification."];
const maxWidth1 = 16;

const words2 = ["What", "must", "be", "acknowledgment", "shall", "be"];
const maxWidth2 = 16;

const words3 = [
  "Science",
  "is",
  "what",
  "we",
  "understand",
  "well",
  "enough",
  "to",
  "explain",
  "to",
  "a",
  "computer.",
  "Art",
  "is",
  "everything",
  "else",
  "we",
  "do"
];
const maxWidth3 = 20;

console.log(fullJustify(words1, maxWidth1));
console.log(fullJustify(words2, maxWidth2));
console.log(fullJustify(words3, maxWidth3));
