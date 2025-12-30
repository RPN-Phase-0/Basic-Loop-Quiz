// Wajib menggunakan nested loop dan conditional.
// Petunjuk: Gunakan logika 'ganjil-genap' dari
// penjumlahan indeks baris (i) dan kolom (j).
function papanCatur(num) {
  let pattern = '';
  // code here
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 1) {
      for (let j = 1; j <= num; j++){
        if (j % 2 == 1) {
          pattern+="#";
        } else {
          pattern+=" ";
        }
      }
    } else {
      // harusnya gak error ya karena j dijalankan salah satu
      for (let j = 1; j <= num; j++) {
        if (j % 2 == 1) {
          pattern+=" ";
        } else {
          pattern+="#";
        }
      }
    }
    pattern+="\n";
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