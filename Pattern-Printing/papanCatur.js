// Wajib menggunakan nested loop dan conditional.
// Petunjuk: Gunakan logika 'ganjil-genap' dari
// penjumlahan indeks baris (i) dan kolom (j).
function papanCatur(num) {
  let pattern = '';
  // code here
  for(let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
      if((i+j) % 2 == 0){
        pattern += `#`;
      }else{
        pattern += ` `;
      } 
    }
    pattern += '\n';
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