function getIndexToIns(arr, num){
  var index = 0,
      i = 0,
      processBreak = false;
      ;

  var sortArr = arr.sort(function(a, b){
    return a - b;
  });

  for(i in sortArr){
    
    if(sortArr[i] >= num){
      index = sortArr.indexOf(sortArr[i]); 
      processBreak = true;
      break;
    }
  }
  if (processBreak === false){
    index = arr.length;
  }
  return index;
}


console.log(getIndexToIns([3, 10, 5], 3));
