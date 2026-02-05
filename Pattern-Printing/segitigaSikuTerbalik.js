// Wajib menggunakan nested loop
function segitigaTerbalik(num) {
  let pattern = '';
  // code here
  for (let i = 0; i < 5; i++) {
    for (let j = num; j > i;j--){
      pattern = pattern + "*";
    }
    pattern = pattern + "\n";
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