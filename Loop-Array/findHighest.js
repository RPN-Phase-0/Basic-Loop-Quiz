//wajib menggunakan loop dan tanpa method/built in function loop
//Math.max di banned wkwk, gunakan variabel untuk menyimpan angka terbesar
//source: https://www.codewars.com/kata/55a2d7ebe362935a210000b2 (versi lain dari ini)

function findHighestInt(arr) {
  //your code here
  let highest = arr[0];
  for (i = 0; i < arr.length; i++) {
    arr[i] > highest ? (highest = arr[i]) : null;
  }

  return highest;
}

console.log(findHighestInt([78, 56, 232, 12, 8])); //8
console.log(findHighestInt([78, 56, 232, 12, 18])); //12
console.log(findHighestInt([78, 56, 232, 412, 228])); //56
console.log(findHighestInt([78, 56, 232, 12, 0])); //0
console.log(findHighestInt([1, 56, 232, 12, 8])); //1
