// Wajib menggunakan nested loop dan conditional.
// Petunjuk: Bintang dicetak hanya jika indeks
// berada di diagonal utama (i === j) ATAU
// diagonal terbalik (i + j === num - 1).
function polaX(num) {
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num; j++) {
      if (i === j || i + j === num + 1) {
        row += "*";
      } else {
        row += " ";
      }
    }
    pattern += row + "\n";
  }
  return pattern;
}

// use case
console.log("\n--- Soal 11: Pola X ---");
console.log(polaX(5));
/*
expected result
*   *
 * *
  *
 * *
*   *
*/
