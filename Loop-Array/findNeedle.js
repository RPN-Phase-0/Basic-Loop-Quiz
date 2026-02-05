//wajib menggunakan loop dan tanpa method/built in function loop
//cari kalimat needle pada array lalu lgsg sikat aja tips return di loop pas ketemu needle
//source: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c

function findNeedle(haystack) {
  // your code here
  for (let i = 0; i <= haystack.length; i++){
    if (haystack[i] === "needle"){
      return `found the needle at position ${i}`
    }
  }

}

let haystack_1 = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
let haystack_2 = ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago'];
let haystack_3 = [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
let haystack_4 = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

console.log(findNeedle(haystack_1)); //found the needle at position 3
console.log(findNeedle(haystack_2)); //found the needle at position 5
console.log(findNeedle(haystack_3)); //found the needle at position 30
console.log(findNeedle(haystack_4)); //found the needle at position 5