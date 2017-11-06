function forLoop(arr){

  for(i=0;i<25;i++){
if(i===0){
  arr.push("I am strange loop.");
  return arr;
}else if(i==1){
  arr.push("I am 1 strange loop.");
  return arr;
}else{
  arr.push("I am "+i+"s strange loop.");
  return arr;
}

  }
}
var count=25;
function whileLoop(count){

  while(count>=0){

    if(count===0)
    return 'done'
  }else{
    count--;
    return count;

  }
}
function doWhileLoop(arr){

  do{
    arr.pop();
    return arr;
  }while (arr.length<0);
