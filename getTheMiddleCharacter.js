function getMiddle(s) {
  let length = s.length;
  let spread = [...s];
  if (length % 2 == 0) {
    return [spread[length / 2 - 1], spread[length / 2]].join("");
  } else {
    return spread[length / 2];
  }
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");
