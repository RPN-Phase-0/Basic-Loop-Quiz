function piramidaTerbalik(num) {
  let pattern = '';
  // code here
  for (let i = 0; i < num ; i++) {
    for (let j = 1; j <= num * 2 - i; j++) {
      if (j - i <= 1) {
        pattern+=" ";
      } else {
        pattern+="*";
      }
    }
    pattern+="\n"
  }
  return pattern;
}

// use case
console.log(piramidaTerbalik(5));
/*
expected result
*********
 *******
  *****
   ***
    *
*/