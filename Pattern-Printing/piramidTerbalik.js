function piramidaTerbalik(num) {
  let pattern = '';
  // code here
  for(let i = 0; i < num ; i++){
    
    for(let j = 0; j < i; j++){
    pattern += ' ';
    }

    for (let k = 0; k < 2 * (num - i) - 1; k++) {
      pattern += '*';
    }

    pattern += '\n';
  }
  return pattern;
}

// use case
console.log(piramidaTerbalik(5));
/*
expected result
*********
 ******* 
  *****
   ***
    *
*/