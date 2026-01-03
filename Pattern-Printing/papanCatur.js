// Wajib menggunakan nested loop dan conditional.
// Petunjuk: Gunakan logika 'ganjil-genap' dari
// penjumlahan indeks baris (i) dan kolom (j).
function papanCatur(num) {
  for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 1; j <= num; j++) {
      if ((i % 2 && j % 2) || (i % 2 === 0 && j % 2 === 0)) {
        pattern += "#";
      } else {
        pattern += " ";
      }
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
