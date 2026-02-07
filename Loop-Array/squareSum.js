//wajib menggunakan loop dan tanpa method/built in function loop
//tambahkan dengan pangkat 2 (n**2)
//source: https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers) {
  //code here
  let result = 0;
  for (i = 0; i < numbers.length; i++) {
    result += numbers[i] ** 2;
  }

  return result;
}

console.log(squareSum([1, 2])); //5
console.log(squareSum([0, 3, 4, 5])); //50
console.log(squareSum([])); //0
