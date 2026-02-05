function piramidaTerbalik(num) {
  let pattern = "";
  for (let i = num; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    pattern += row + "\n";
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
