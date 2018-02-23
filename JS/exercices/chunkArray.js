function chunkArrayInGroups(arr, size){
var newArray = [],
    subArray = [];
var counter = 0, 
    elements = size ;

  var iterations = Math.ceil(arr.length / size);

for( var i = 0; i < iterations; i++){
  if(i === 0){
    subArray = arr.slice(i, size);
  } else{
    counter += size;
    elements += size;
    subArray = arr.slice(counter, elements);
  }

  newArray.push(subArray);
}
  return newArray;
}


console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
