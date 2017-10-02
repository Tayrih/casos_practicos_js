function selectionSort(Array){
  
  for(var i = 0; i < Array.length; i++){
    var min = i;
    for(var j = i + 1; j < Array.length; j++){
      if(Array[j] < Array[min]){
        min = j;
      }
    }
    var temporal = Array[min];
    Array[min] = Array[i];
    Array[i] = temporal;
  }
  
  return Array;
  
}

console.log(selectionSort([3,6,8,1,7,0]));

function binary(Array, elemento){
  var min = 0;
  var max = Array.length - 1; 

  while (min <= max) { 
    var mitad = Math.floor((min + max) / 2); //math.floor devuelve un entero
    var numCoincindencia = Array[mitad];

    if (numCoincindencia === elemento) {
      return mitad;
    }

    if (numCoincindencia > elemento) { //Recorre hacia la izquierda del array
      max = mitad - 1;
    }
    else { // recorre hacia la derecha del array
      min = mitad + 1;
    }
  }

  return "No Existe en el Arreglo";
}



console.log(binary(selectionSort([3,6,8,1,7,0]),8));

























