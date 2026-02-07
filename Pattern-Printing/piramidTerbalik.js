function piramidaTerbalik(num) {
  let pattern = "";
  // code here
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j < i; j++) {
      pattern += " ";
    }

    for (let k = 1; k <= num * 2 - (2 * i - 1); k++) {
      pattern += "*";
    }
    pattern += "\n";
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
