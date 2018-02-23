function rot13(str){
  var newStr= ""
      newChar = ""
      i = 0;

  for(i in str){
    var char = str.charCodeAt(i);

    if(char > 64 && char < 91){
      newChar = char + 13;
      if(newChar > 90){
        newChar = (newChar - 90) + 64 ;
        newStr += String.fromCharCode(newChar);
      }else{
        newStr += String.fromCharCode(newChar);
      }
    } else{
      newStr += String.fromCharCode(char);
    }
  }
    
  
return newStr;

}

console.log(rot13("SERR YBIR?"));