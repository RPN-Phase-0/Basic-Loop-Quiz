// Wajib menggunakan nested loop
function segitigaTerbalik(num) {
  let pattern = "";
  // code here
  for (let i = num; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    pattern += row + "\n";
  }
  return pattern;
}

// use case
console.log(segitigaTerbalik(5));
/*
expected result
*****
****
***
**
*
*/
