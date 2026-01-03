// Wajib menggunakan nested loop dan conditional.
// Petunjuk: Gunakan logika 'ganjil-genap' dari
// penjumlahan indeks baris (i) dan kolom (j).
function papanCatur(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num; j++) {
      if ((i % 2 && j % 2) || (i % 2 === 0 && j % 2 === 0)) {
        row += "#";
      } else {
        row += " ";
      }
    }
    pattern += row + "\n";
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
