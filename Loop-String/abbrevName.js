//wajib menggunakan loop dan tanpa method/built in function loop
//Sam Harris => S.H
// patrick feeney => P.F
//source: https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name) {
  let result = "";
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") result += ".";
    if (i === 0 || name[i - 1] === " ") {
      result += name[i];
    }
  }
  return result;
}

console.log(abbrevName("Sam Harris")); //S.H
console.log(abbrevName("Patrick Feenan")); //P.F
console.log(abbrevName("Evan Cole")); //E.C
console.log(abbrevName("P Favuzzi")); //P.F
console.log(abbrevName("David Mendieta")); //D.M
