// Wajib menggunakan nested loop dan conditional (if/else) di dalamnya.
function persegiBolong(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num; j++) {
      if (i === 1 || i == num || j === 1 || j === num) {
        row += "*";
      } else {
        row += " ";
      }
    }
    pattern += row + "\n";
  }
  return pattern;
}

// use case
console.log(persegiBolong(5));
/*
expected result
*****
*   *
*   *
*   *
*****
*/
