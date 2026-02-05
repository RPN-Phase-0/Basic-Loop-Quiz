//wajib menggunakan loop dan tanpa method/built in function loop
//hitung yang true
//source: https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(sheep) {
  // TODO
  let benar = 0;

  //looping
  for(let i=0; i < sheep.length; i++ ){
    if(sheep[i] == true){
      benar++;
    } 
  }
  return benar;
}



console.log(countSheeps([])) //0
console.log(countSheeps([undefined])) //0
console.log(countSheeps([null])) //0
console.log(countSheeps([false])) //0
console.log(countSheeps([true])) //1
console.log(countSheeps(
  [true,true,true,false,
   true,true,true,true,
   true,false,true,false,
   true,false,false,true,
   true,true,true,true,
   false,false,true,true])) //17