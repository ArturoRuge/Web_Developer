function palindrome(str){
  var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,._";
  var array = [];
  var str2 = "";
  str = str.toLowerCase();

  for(var i = 0; i < specialChars.length; i++){
    str = str.replace(new RegExp("\\" + specialChars[i], "gi"), "");
  }
  
  str = str.replace(/ /g, "");


  array = str.split("");
  array = array.reverse();
  str2 = array.join("");

  console.log(str, str2);

  if(str === str2){
    return true;
  } else{
    return false;
  }
  
}

console.log(palindrome("1 eye for of 1 eye."));