// Wajib menggunakan nested loop dan conditional.
// Petunjuk: Gunakan logika 'ganjil-genap' dari
// penjumlahan indeks baris (i) dan kolom (j).
function papanCatur(num) {
  let pattern = "";
  for (let i = 0; i <= num; i++) {
    for (let i = 0; i < num; i++) {
      if (i % 2) pattern += " ";
      else pattern += "#";
    }
    console.log(pattern);
  }
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
