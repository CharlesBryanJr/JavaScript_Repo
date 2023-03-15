function sortedSquaredArray(array) {
    const squared_sorted = new Array(array.length).fill(0);
  
    let num = null;
    for(let idx = 0; idx<array.length; ++idx){
      num = array[idx];
      squared_sorted[idx] = (num * num);
    }
  
    squared_sorted.sort((a, b) => a - b);
    return squared_sorted;
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;  