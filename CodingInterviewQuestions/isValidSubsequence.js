function isValidSubsequence(array, sequence) {
    let [i, ii] = [0, 0];
    let [num1, num2] = [array[i], sequence[ii]];
  
    while(i < array.length){
      if(ii >= sequence.length){
        return true;
      }
      [num1, num2] = [array[i], sequence[ii]];
      if(num1 === num2){
        ++i;
        ++ii;
      }
      else{
        ++i;
      }
    }
    
    if(ii >= sequence.length){
      return true;
    }
  
    return false;
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;