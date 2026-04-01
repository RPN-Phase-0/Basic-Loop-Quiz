function berlian(num) {
  let pattern = "";
  // code here

  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= num - i; j++) {
      pattern += " ";
    }

    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  for (let i = num - 1; i >= 1; i--) {
    for (let j = 1; j <= num - i; j++) {
      pattern += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      pattern += "*";
    }
    pattern += "\n";
  }

  return pattern;
}

// use case
console.log(berlian(5)); // num di sini adalah tinggi setengah bagian atas
/*
expected result
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
