function moveElementToEnd(array, toMove) {
    let idx = array.length - 1;
    let element_count = array.length - 1;
  
    while(idx >= 0){
      const num = array[idx];
      console.log("idx:", idx);
      console.log("element_count:", element_count);
      
      if(num === toMove){
        swap(idx, element_count, toMove, array)
        --element_count;
        console.log("array:", array);
      }
      --idx;
    }
    return array;
  }
  
  function swap(idx1, idx2, toMove, array){
    array[idx1] = array[idx2];
    array[idx2] = toMove;
  }
  
  // Do not edit the line below.
  exports.moveElementToEnd = moveElementToEnd;