// Wajib menggunakan nested loop dan conditional.
// Petunjuk: Bintang dicetak hanya jika indeks
// berada di diagonal utama (i === j) ATAU
// diagonal terbalik (i + j === num - 1).
function polaX(num) {
  let pattern = '';
  // code here
  for(let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
      if((i === j) || (i + j === num - 1)){
        pattern += '*';
      }else{
        pattern += ' ';
      }
    }
    pattern += '\n';
  }
  return pattern;
}

// use case
console.log('\n--- Soal 11: Pola X ---');
console.log(polaX(5));
/*
expected result
*   *
 * *
  *
 * *
*   *
*/