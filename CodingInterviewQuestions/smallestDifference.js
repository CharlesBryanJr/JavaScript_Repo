function smallestDifference(arrayOne, arrayTwo) {
    arrayOne.sort((a, b) => a-b);
    arrayTwo.sort((a, b) => a-b);
    
    let smallest_difference = Infinity;
    let smallest_difference_array = null;
  
    let [idx1, idx2] = [0, 0];
    let [NUM1, NUM2] = [arrayOne[idx1], arrayTwo[idx2]];
    
    while(idx1 < arrayOne.length && idx2 < arrayTwo.length){
      let NUM1 = arrayOne[idx1];
      let NUM2 = arrayTwo[idx2];
      
      if(Difference(NUM1, NUM2) < smallest_difference){
        smallest_difference = Difference(NUM1, NUM2);
        smallest_difference_array = [NUM1, NUM2]
      }
      
      if(NUM1 === NUM2){
        return [NUM1, NUM2];
      }
      else if(NUM1 > NUM2){
        ++idx2;
      }
      else if(NUM1 < NUM2){
        ++idx1;
      }
    }
  
    return smallest_difference_array;
  }
  
  function Difference(a, b){
    return Math.abs(a - b);
  }
  
  // Do not edit the line below.
  exports.smallestDifference = smallestDifference;