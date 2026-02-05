// Wajib menggunakan nested loop.
// Petunjuk: Anda mungkin perlu 2 loop di dalam 1 loop (satu untuk spasi, satu untuk bintang).
function piramida2(num) {
  let pattern = '';
  // code here
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num; j++) {
      if (j <= num - i) {
        pattern+=" ";
      } else {
        pattern+="* ";
      }
    }
    pattern+="\n"
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