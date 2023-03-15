function twoNumberSum(array, targetSum) {
    for(let i = 0; i < array.length; ++i){
      for(let ii = 0; ii < array.length; ++ii){
        if(i === ii)
        { continue; }
        num1 = array[i];
        num2 = array[ii];
        if(num1 + num2 === targetSum){
          return [num1, num2]
        }
      }
    }
    return []
}


function twoNumberSum2(array, targetSum) {
    array.sort((a, b) => a - b);
    left = 0;
    right = array.length - 1;
    while(left < right){
      num1 = array[left]
      num2 = array[right]
  
      if(num1 + num2 < targetSum)
      {  ++left; }
      else if(num1 + num2  > targetSum)
      { --right; }
      else{ return [num1, num2]; }
    }
  
    return [];
}
