// Wajib menggunakan nested loop dan conditional.
// Petunjuk: Gunakan logika 'ganjil-genap' dari
// penjumlahan indeks baris (i) dan kolom (j).
function papanCatur(num) {
  let pattern = '';
  // code here
  for (let i = 1; i <= num ; i++) {
    for (let q = 1; q <= num; q++) {
      if (i % 2 === 1) {
        if(q % 2 === 1) {
          pattern += "#";
        } else {
          pattern += " ";
        }
      } else {
        if(q % 2 === 0) {
          pattern += "#";
        } else {
          pattern += " ";
        }
      }
    }
    if(i !== num){pattern+="\n";} // seperti biasa. aesthetic is important wkwkwk
  }
  return pattern;
}

// use case
console.log(papanCatur(5));
/*
expected result
# # #
 # # 
# # #
 # # 
# # #
*/