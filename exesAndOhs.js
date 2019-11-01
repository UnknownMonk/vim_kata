

  
         
         
         function XO(str) {
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    const item = str[i];
    if (item === 'x' || item === 'X') {
      x++
    } else if (item === 'o' || item === 'O') {
      o++;
    }
  }
  console.log(o);
  
  if (x == o) {
    return true;
  } else {
    return false;
  }
}





 














