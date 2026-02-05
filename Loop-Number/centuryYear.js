//wajib menggunakan loop dan tanpa method/built in function loop
//tahun 1705 jadi 18
//tahun 2742 jadi 28
//tahun 1900 jadi 19
//source: https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function century(year) {
  // Finish this :)
  let abad = 1;
  while (year > 100){
    year = year - 100;
    abad = abad + 1;
  }
  return abad;
}

console.log(century(1705)); //18
console.log(century(1900)); //19
console.log(century(1601)); //17
console.log(century(2000)); //20
console.log(century(89)); //1