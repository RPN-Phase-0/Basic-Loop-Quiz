function berlian(num) {
  let pattern = "";
  // code here
  for (let i = 1; i <= num; i++) {
    pattern += " ".repeat(num - i);
    pattern += "*".repeat(2 * i - 1);
    pattern += "\n";
  }

  for (let i = num - 1; i >= 1; i--) {
    pattern += " ".repeat(num - i);
    pattern += "*".repeat(2 * i - 1);
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
