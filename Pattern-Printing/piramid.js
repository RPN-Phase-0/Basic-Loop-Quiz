// Wajib menggunakan nested loop.
// Petunjuk: Anda mungkin perlu 2 loop di dalam 1 loop (satu untuk spasi, satu untuk bintang).
function piramida(num) {
  let pattern = '';
  // code here
  for (let i = num; i >= 0;i--) {
   for (let j = 1; j <= num * 2 - 1 - i; j++) {
    if (i >= j) {
      pattern+=" ";
    } else {
      pattern+="*";
    }
   } 
   pattern+="\n";
  }
  return pattern;
}

// use case
console.log(piramida(5));
/*
expected result
    *
   ***
  *****
 *******
*********
*/