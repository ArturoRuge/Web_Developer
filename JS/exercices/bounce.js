function bouncer(arr){
  var filterArr = arr.filter(function(val){
    if(typeof val == "number" ||  typeof val == "string"){
      return val;
    }
  });
  return filterArr;
}


console.log(bouncer([1, null, NaN, 2, undefined, "hola"]));
