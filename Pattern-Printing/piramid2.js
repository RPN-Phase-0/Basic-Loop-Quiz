// Wajib menggunakan nested loop.
// Petunjuk: Anda mungkin perlu 2 loop di dalam 1 loop (satu untuk spasi, satu untuk bintang).
function piramida2(num) {
  let pattern = '';
  // code here
  for (let i = 1; i <= num; i++) {
    for (let w = 1; w <= num; w++) {
      if (w <= num - i) {
        pattern+=" ";
      } else {
        pattern+="* ";
      }
    }
    if (i !== num) {pattern+="\n";} // biar bawahnya ilang wkwkwk
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