//wajib menggunakan loop dan tanpa method/built in function loop
//Sam Harris => S.H
// patrick feeney => P.F
//source: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name){
  //code here
  let arr = name.split(" ");

  let result = [];

  for(let i = 0; i < arr.length; i++) {
    result.push(arr[i][0]);
  }

  return result.join(".");
}

console.log(abbrevName("Sam Harris")); //S.H
console.log(abbrevName("Patrick Feenan")); //P.F
console.log(abbrevName("Evan Cole")); //E.C
console.log(abbrevName("P Favuzzi")); //P.F
console.log(abbrevName("David Mendieta")); //D.M