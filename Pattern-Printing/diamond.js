function berlian(num) {
  let pattern = '';
  // code here
  for (let i = 1; i <= num; i++) {
    for (let q = 1; q < num + i; q++ ) {
      if (q <= num - i) {
        pattern+=" ";
      } else {
        pattern+="*";
      }
    }
    pattern+="\n" 
  }

  for(let i = 2; i <= num; i++) {
    for (let w = 1; w <= num * 2 - i; w++) {
      if (w < i) {
        pattern+=" ";
      } else {
        pattern+="*"
      }
    }
    pattern+="\n";
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