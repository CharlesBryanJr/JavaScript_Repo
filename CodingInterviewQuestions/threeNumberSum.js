function threeNumberSum(array, targetSum){
    array.sort((a, b) => a - b)
    let three_number_sum = [];
  
    for(let idx=0; idx<array.length - 2; ++idx){
      let left = idx + 1;
      let right = array.length - 1;
      while(left < right){
        const current_sum = array[idx] + array[left] + array[right];
        if(current_sum === targetSum){
          three_number_sum.push([array[idx], array[left], array[right]]);
          left++; 
          right--; 
        }
        else if(current_sum < targetSum){ 
          left++; 
        }
        else if(current_sum > targetSum){ 
          right--; 
        }
      }
    }
  
    return three_number_sum;
  }
  
  // Do not edit the line below.
  exports.threeNumberSum = threeNumberSum;