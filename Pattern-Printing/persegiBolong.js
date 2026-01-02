// Wajib menggunakan nested loop dan conditional (if/else) di dalamnya.
function persegiBolong(num) {
  let pattern = '';
  // code here
  for (let i = 1; i <= num;i++) {
    if (i == 1 || i==num) {
      for (let j = 1;j <= num;j++) {
        pattern+="*";
      }
    } else {
      for (let k = 1; k <= num;k++) {
        if (k == 1 || k == num) {
          pattern+="*";
        } else {
          pattern+=" ";
        }
      }
    }
    pattern+="\n"
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