//wajib menggunakan loop dan tanpa method/built in function loop
//hanya mengulang string sebanyak n kali
//source: https://www.codewars.com/kata/57a0e5c372292dd76d000d7e

function repeatStr (n, s) {
  //code here
  let hasil = "";
  for(let i = 0; i < n; i++){
    hasil = hasil + n;
  }
  return hasil;
}

console.log(repeatStr(3, "*")); //***
console.log(repeatStr(5, "#")); //#####
console.log(repeatStr(2, "ha ")); //ha ha 
console.log(repeatStr(0, "")); //
console.log(repeatStr(0, "I")); //
console.log(repeatStr(5, "")); //
console.log(repeatStr(6, "I")); //IIIIII
console.log(repeatStr(5, "Hello")); //HelloHelloHelloHelloHello