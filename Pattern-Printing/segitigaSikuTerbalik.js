// Wajib menggunakan nested loop
function segitigaTerbalik(num) {
  let pattern = "";
  // code here

  for (let i = num; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }

    pattern += "\n";
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
