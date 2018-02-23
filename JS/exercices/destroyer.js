function destroyer(arr){
 
  var argLength = arguments.length
      arg = arguments;

  var arrFilter = arr.filter(function(val){
    var exist = false;
    for(var i = 1; i < argLength; i++){
      if (val === arg[i]){
        exist = true;
      }
    }
    if(exist === false){
      return val;
    }
  });
  return arrFilter;
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
