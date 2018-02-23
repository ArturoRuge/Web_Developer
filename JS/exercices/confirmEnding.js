function confirmEnding(str, target){
    // "Never give up and good luck will find you."
  // -- Falcor

  var targetLength = target.length * (-1);
  var char = str.substr(targetLength);
  if( target === char){
    return true;
  } else{
    return false;
  }
}


console.log(confirmEnding("Bastian", "tian"));
