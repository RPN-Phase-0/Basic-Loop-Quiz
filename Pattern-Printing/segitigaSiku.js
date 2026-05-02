// Pada quiz ini wajib menggunakan nested loop
function segitigaSiku(num) {
  let pattern = '';
  // code here
  for (let i = 1; i <= num; i++) {
    for (let q = 1; q <= i; q++) {
      pattern+="*";
    }
    if(i !== num) {pattern+="\n"} //seperti biasa buat estetika.
  }
  return pattern;
}

// use case
console.log(segitigaSiku(5));
/*
expected result
*
**
***
****
*****
*/