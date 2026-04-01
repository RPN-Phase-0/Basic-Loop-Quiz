function piramidaTerbalik(num) {
  let pattern = '';
  // code here

  for(let i = num; i >= 1; i--) {
    for(let j = 1; j <= num - i; j++) {
      pattern += " ";
    }

    for(let k = 1; k <= 2 * i - 1; k++) {
      pattern += "*";
    }

    pattern += "\n";
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