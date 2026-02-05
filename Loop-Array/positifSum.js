//wajib gunakan loop tanpa method/built in function loop
//jumlahkan yang positifnya aja
//source: https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  //code here
  hacil_akir = 0;
  for (let pariabel = 0; pariabel < arr.length; pariabel++) {
    // gabut guys :)
    if (arr[pariabel] > 0) {
      hacil_akir+=arr[pariabel];
    }
  }
  return hacil_akir;
}

console.log(positiveSum([1,2,3,4,5])) //15
console.log(positiveSum([1,-2,3,4,5])) //13
console.log(positiveSum([])) //13
console.log(positiveSum([-1,2,3,4,-5])) //9