function berlian(num) {
  // code here
  let pattern = "";
  for (let i = 1; i <= num; i++) {
    let row = "";

    for (let j = 1; j <= num - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    pattern += row + "\n";
  }
  for (let i = num; i > 1; i--) {
    let row = "";
    for (let j = 1; j <= num - (i - 1); j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * (i - 1) - 1; k++) {
      row += "*";
    }
    pattern += row + "\n";
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
