// Wajib menggunakan nested loop dan conditional (if/else) di dalamnya.
function persegiBolong(num) {
  let pattern = '';
  // code here
  for (let i=1; i<=num; i++) {
    for(let q=1; q <= num; q++) {
      if(i === 1 || i === num) {
        pattern+="*";
      } else {
        if(q === 1 || q === num) {
          pattern+="*";
        } else {
          pattern+=" ";
        }
      }
    }
    if(i !== num){pattern+="\n";} //buat menghilangkan enter terakhir hehe
    //biar lebih estetik wkwkwkwk
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