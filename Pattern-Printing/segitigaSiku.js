// Pada quiz ini wajib menggunakan nested loop
function segitigaSiku(num) {
  let pattern = "";
  // code here
  for (let i = 1; i <= num; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }

    pattern += row + "\n";
  }
  return pattern;
}

// use case
console.log(segitigaSiku(5));
/*
expected result
*
**
***
****
*****
*/
