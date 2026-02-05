// Wajib menggunakan nested loop.
// Petunjuk: Anda mungkin perlu 2 loop di dalam 1 loop (satu untuk spasi, satu untuk bintang).
function piramida2(num) {
  let pattern = "";
  // code here
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= i; k++) {
      row += "* ";
    }
    pattern += row + "\n";
  }
  return pattern;
}

// use case
console.log(piramida2(5));
/*
expected result
    *
   * *
  * * *
 * * * *
* * * * *
*/
