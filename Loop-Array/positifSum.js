//wajib gunakan loop tanpa method/built in function loop
//jumlahkan yang positifnya aja
//source: https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  //code here
  let hasil = 0;
  let i = 0;
  while(true) { // kali-kali pake while wkwkwkwk
    if (i == arr.length) {
      break;
    } else if (arr[i] > 0) {
      hasil+=arr[i];
    }
    i++;
  }
  return hasil;
}

console.log(positiveSum([1,2,3,4,5])) //15
console.log(positiveSum([1,-2,3,4,5])) //13
console.log(positiveSum([])) //13
console.log(positiveSum([-1,2,3,4,-5])) //9

// kayaknya yang nomer 3 mas zexo lagi ngantuk buat soalnya wkwkwkwk