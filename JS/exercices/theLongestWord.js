function findLongestWord(words){
  var arrayWords = words.split(" ");
  var length = 0;

  for( var i in arrayWords){
    arrayLength = arrayWords[i].length;
    if( arrayLength > length){
      length = arrayLength;
    }
  }
  return length;
}

console.log(findLongestWord("esta es la palabra mas larrrrrrga00000"));