function berlian(num) {

  // code here
  let pattern = "";
  
  //loop segitiga atas
  for(let i = 0; i < num; i++){
    //Loop Spasi
    for(let j = 0; j < num - i - 1; j++){
      pattern += " ";
    }
    // Loop Bintang
    for(let k = 0; k < 2 * i + 1; k++){
      pattern += "*";
    }
    pattern += `\n`;
  }
  //Loop Bawah
  for (let i = num - 2; i >= 0; i--) {

    // spasi
    for (let j = 0; j < num - i - 1; j++) {
      pattern += ' ';
    }

    // bintang
    for (let k = 0; k < 2 * i + 1; k++) {
      pattern += '*';
    }

    
    pattern += '\n';
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