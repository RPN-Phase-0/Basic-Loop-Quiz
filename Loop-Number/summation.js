//wajib menggunakan loop dan tanpa method/built in function loop
//2 -> 3 (1 + 2)
//8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
//source: https://www.codewars.com/kata/55d24f55d7dd296eb9000030

function summation (num) {
  // Code here
  let angka = 0;
  for(let i = 1; i <= num; i++){
    angka = angka + i;
  }
  return angka;
}

console.log(summation(1)); //1
console.log(summation(2)); //3
console.log(summation(8)); //36