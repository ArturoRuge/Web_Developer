function mutation(arr){
  var word1 = arr[0].toLowerCase(),
      word2 = arr[1].toLowerCase();

  for(var i in word2){
    if(word1.indexOf(word2[i]) === -1){
      return false;
    } 
  }
  return true;
}

console.log(mutation(["hello", "Hel"]));
