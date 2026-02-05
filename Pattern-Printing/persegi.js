// Wajib menggunakan nested loop
function persegi(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num; j++) {
      row += "*";
    }
    pattern += row + "\n";
  }
  return pattern;
}

// use case
console.log(persegi(4));
/*
expected result
****
****
****
****
*/
