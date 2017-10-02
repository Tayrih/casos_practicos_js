function range(start, end,step = null){
  
  if(step == 0){
    step = 1;
  }
  if(step == null && start < end){
    step =1;
  }
  if(step == null && start > end){
    step = -1;
  }

  var arr = [];

  for(var i = start; (start < end)? i <= end: i >= end; i+=step){
    
      arr.push(i);    
  }
  return arr;
}

console.log(range(1,10));

function sum(Array){
  var sumador = 0;
   
  for(var i = 0; i < Array.length; i++ ){
    sumador += Array[i];
  }
  return sumador;
}

console.log(sum(range(1,10)));





