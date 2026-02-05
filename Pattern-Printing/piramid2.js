// Wajib menggunakan nested loop.
// Petunjuk: Anda mungkin perlu 2 loop di dalam 1 loop (satu untuk spasi, satu untuk bintang).
function piramida2(num) {
  let pattern = '';
  // code here
  for(let i = 0; i < num ; i++){
    for(let j = 0; j <  num - i - 1; j++){
    pattern += ' ';
    }
    for (let k = 0; k < i ; k++) {
      pattern += '* ';
    }
    pattern += '*';
    pattern += '\n';
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