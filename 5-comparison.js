function Comparison(array1, array2){
  flag = true;
  if(array1.length != array2.length){
    flag = false;
  }else{
    for(var i = 0; i < array1.length; i++){
      if(array1[i] != array2[i]){
          flag = false;
      }
    }
  }
  return flag;
}

console.log(Comparison([1,2,3,4,5], [1,2,3,4,5]));
console.log(Comparison([1,2,3,4,5], [1,3,3,4,5]));
console.log(Comparison([1,2,3,4,5], [1,2,4,5]));