function truncateString(str, num){
  var truncateStr = "";
  if(num <=3 ){
    truncateStr = str.slice(0, num) + "...";
  } else if(num >= str.length){
    truncateStr = str;
  } else{
    truncateStr = str.slice(0, num-3) + "...";
  }
  return truncateStr;
}


console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));
