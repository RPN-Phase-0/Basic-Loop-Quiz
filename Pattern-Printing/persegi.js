// Wajib menggunakan nested loop
function persegi(num) {
  let pattern = '';
  // code here
  for(let i = 0 ; i < num; i++){
    for(let j = 0; j < num; j++){
      pattern += '*';
    }
    pattern += '\n';
  }
  return pattern;
}

// use case
console.log(persegi(4));
/*
expected result
****
****
****
****
*/