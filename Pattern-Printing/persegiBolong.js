// Wajib menggunakan nested loop dan conditional (if/else) di dalamnya.
function persegiBolong(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 1; j <= num; j++) {
      if (i === 1 || i == num || j === 1 || j === num) {
        pattern += "*";
      } else {
        pattern += " ";
      }
    }
    result += pattern + "\n";
  }
  return result;
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
