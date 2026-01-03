// Wajib menggunakan nested loop
function persegi(num) {
  for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 1; j <= num; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
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
