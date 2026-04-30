// Wajib menggunakan nested loop
function segitigaTerbalik(num) {
  let pattern = '';
  // code here
  for (let i = 1; i <= num; i++) {
    for (let q = num; q >= i;q--) {
      pattern+="*";
    }
    if(i != num){pattern+="\n";} //seperti biasa buat estetika wkwkwk
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