function wordsToMarks(string) {
  let charNum = [];
  let spString = string.split("");
  for (let i = 0; i < spString.length; i++) {
    charNum.push(string.charCodeAt(i) - 96);
  }
  return charNum.reduce((a, b) => a + b);
}

console.log(wordsToMarks("string"));
