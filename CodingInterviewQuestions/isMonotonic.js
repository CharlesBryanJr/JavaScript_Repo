function isMonotonic(array) {
    if(array.length === 0){
      return true;
    }
    
    let nonIncreasing_count = 0;
    let nonDecreasing_count = 0;
    
    for(let idx=0; idx<array.length - 1; ++idx){
      const num = array[idx];
      const nextNum = array[idx + 1];
  
      if(nonIncreasing(num, nextNum)){
        ++nonIncreasing_count;
      }
      if(nonDecreasing(num, nextNum)){
        ++nonDecreasing_count;
      }
    }
  
    if(nonIncreasing_count === array.length - 1){
      return true;
    }
    if(nonDecreasing_count === array.length - 1){
      return true;
    }
    
    return false;
  }
  
  function nonIncreasing(num, nextNum){
    if(num >= nextNum){
      return true;
    }
    return false;
  }
  
  function nonDecreasing(num, nextNum){
    if(num <= nextNum){
      return true;
    }
    return false;
  }
  
  
  // Do not edit the line below.
  exports.isMonotonic = isMonotonic;
  