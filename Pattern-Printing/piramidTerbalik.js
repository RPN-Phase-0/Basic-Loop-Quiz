function piramidaTerbalik(num) {
  let pattern = '';
  // code here
  for (let i = 1; i <= num ; i++) {
    for (let q = 1; q <= num * 2 - i; q++) {
      if (i > q) {
        pattern+=" "; 
      } else {
        pattern+="*";
      }
    }
    pattern+="\n";
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