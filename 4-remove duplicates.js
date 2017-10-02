function search(Array, elemento){
  var arr = Array;
  var item;
  for(var i = 0; i<arr.length; i++){
    if(arr[i] === elemento){
      
      item = arr.splice(i,1);
    }
  }
  return arr;
}

console.log(search([2,5,6,1,2,3],2))