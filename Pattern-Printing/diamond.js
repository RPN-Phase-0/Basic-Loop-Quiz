function berlian(num) {
  let pattern = '';
  // code here
  for (let i = num; i > 0 ;i--) {
    for (let q = 1; q <= num * 2 - i ; q++) {
      if (q < i){
        pattern+=" ";
      } else {
        pattern+="*";
      }
    }
    pattern+="\n";
  }
  for (let j = 1; j <= num; j++) {
    for (let r = 0; r < num * 2 - j - 1;r++) {
      if (r < j ) {
        pattern+=" ";
      } else {
        pattern+="*";
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