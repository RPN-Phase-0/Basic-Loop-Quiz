function berlian(num) {
  // code here
  for (let i = 1; i <= num; i++) {
    let pattern = "";

    for (let j = 1; j <= num - i; j++) {
      pattern += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      pattern += "*";
    }
    console.log(pattern);
  }
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
