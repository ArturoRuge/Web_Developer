function titleCase(str){
  var arrayStr = str.split(" ");
  var word = "", 
      newWord = "", 
      newStr = "";
  

function strToUpper(arrayStr){
  var arrayWords = [];
  var strChanged = "";

  for(var i in arrayStr){
    word = arrayStr[i];
    newWord = changeWord(word);
    arrayWords.push(newWord);
  }
  strChanged = arrayWords.join(" ");
  return strChanged;
}

function changeWord(str){
  var changeWord = "";
  for(var i = 0; i < str.length; i++){
    if( i === 0){
      changeWord += str[i].toUpperCase(); 
    } else{
      changeWord += str[i].toLowerCase();
    }
  }
  return changeWord;
} 

  newStr = strToUpper(arrayStr);

  return(newStr);  
}

console.log(titleCase("soy un texto muy creativo"));