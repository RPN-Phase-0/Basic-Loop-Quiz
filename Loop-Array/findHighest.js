//wajib menggunakan loop dan tanpa method/built in function loop
//Math.max di banned wkwk, gunakan variabel untuk menyimpan angka terbesar
//source: https://www.codewars.com/kata/55a2d7ebe362935a210000b2 (versi lain dari ini)

function findHighestInt(arr) {
  //your code here
  for (let i = 0; i < arr.length; i++) {
    for (let q = 0 ; q < arr.length; q++) {
      if (arr[q + 1] > arr[q]) {
        [arr[q + 1], arr[q]] = [arr[q], arr[q + 1]];
      }
    }
  }
  return arr[0];
} // kayaknya mas zexo pas buat soal ini agak ngantuk, harusnya expected outputnya terbesar. Tapi, dibawah malah terkecil wkwkwk

console.log(findHighestInt([78,56,232,12,8])); //8
console.log(findHighestInt([78,56,232,12,18])); //12
console.log(findHighestInt([78,56,232,412,228])); //56
console.log(findHighestInt([78,56,232,12,0])); //0
console.log(findHighestInt([1,56,232,12,8])); //1