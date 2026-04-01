//wajib menggunakan loop dan tanpa method/built in function loop
//hilangkan spasinya saja
//source: https://www.codewars.com/kata/57eae20f5500ad98e50002c5

function noSpace(x){
  //code here
  let arr = x.split("");

  let result = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== " ") {
      result.push(arr[i]);
    }
  }

  return result.join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")) //8j8mBliB8gimjB8B8jlB
console.log(noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd")) //88Bifk8hB8BB8BBBB888chl8BhBfd