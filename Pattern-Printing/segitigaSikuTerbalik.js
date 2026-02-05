// Wajib menggunakan nested loop
function segitigaTerbalik(num) {
  let pattern = '';
  // code here
  for(let i = 0; i < num ; i++){
    for (let k = 0; k < num - i ; k++) {
      pattern += '*';
    }
    
    pattern += '\n';
  }
  return pattern;
}

// use case
console.log(segitigaTerbalik(5));
/*
expected result
*****
****
***
**
*
*/