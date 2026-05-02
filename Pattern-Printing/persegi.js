// Wajib menggunakan nested loop
function persegi(num) {
  let pattern = '';
  // code here
  for(let i = 1 ; i <= num; i++) {
    for(let q = 1; q <= num; q++) {
      pattern+="*";
    }
    if (i !== num){pattern+="\n";} // Aku tambahin if ini buat akhirannya gak ada enter tambahan
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