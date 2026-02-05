//wajib menggunakan loop dan tanpa method/built in function loop
//Math.min di banned wkwk, gunakan variabel untuk menyimpan angka terkecil
//source: https://www.codewars.com/kata/55a2d7ebe362935a210000b2

function findSmallestInt(arr) {
  //your code here
  let kecil = 500;

  // Loop
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] < kecil){
      kecil = arr[i];
    }
  }
  return kecil;
}

console.log(findSmallestInt([78,56,232,12,8])); //8
console.log(findSmallestInt([78,56,232,12,18])); //12
console.log(findSmallestInt([78,56,232,412,228])); //56
console.log(findSmallestInt([78,56,232,12,0])); //0
console.log(findSmallestInt([1,56,232,12,8])); //1