// Wajib menggunakan nested loop dan conditional (if/else) di dalamnya.
function persegiBolong(num) {
  let pattern = '';
  // code here
  for(let i = 0; i < num; i++){
    for(let j = 0; j < num; j++){
      if(i == 0 || i == num -1 || j == 0 || j == num-1){
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
console.log(persegiBolong(5));
/*
expected result
*****
*   *
*   *
*   *
*****
*/