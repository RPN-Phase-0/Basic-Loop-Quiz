//wajib gunakan loop tanpa method/built in function loop
//jumlahkan yang positifnya aja
//source: https://www.codewars.com/kata/5715eaedb436cf5606000381

function positiveSum(arr) {
  //code here
  let cum = 0;

  //Looping
  for(let i = 0; i <= arr.length; i++){
    if(arr[i] > 0){
      cum = cum + arr[i];
    }
  }
  return cum;
}

console.log(positiveSum([1,2,3,4,5])) //15
console.log(positiveSum([1,-2,3,4,5])) //13
console.log(positiveSum([])) //13
console.log(positiveSum([-1,2,3,4,-5])) //9