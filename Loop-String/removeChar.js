//wajib menggunakan loop dan tanpa method/built in function loop
//hapus huruf pertama dan terakhir
//source: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str){
  let hasil = "";
    for(let i = 0; i <= str.length; i++){
        if(i > 0 && i < str.length-1){
            hasil += str[i];
        }
    }
    return hasil;
}

console.log(removeChar('eloquent')); //loquen
console.log(removeChar('country')); //ountr
console.log(removeChar('person')); //ountr
console.log(removeChar('place')); //lac
console.log(removeChar('ab')) //
console.log(removeChar('ooopsss')); //oopss