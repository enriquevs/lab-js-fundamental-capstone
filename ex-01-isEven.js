/**
 * Ex-02: isEven()
 *
 * Write a function called isEvent that takes an integer and returns
 * true or false based on whether that integer is odd or even
 *
**/


// ++ YOUR CODE HERE

function isEven(number) {
  var isEven;
  if(number%2 === 0){
    isEven = true;
  }
  else{
    isEven = false;
  }
  return isEven;
}
