function forLoop(arr){

  for(i=0;i<25;i++){

     arr.push("I am "+i+" strange loop.");
     return arr;
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
