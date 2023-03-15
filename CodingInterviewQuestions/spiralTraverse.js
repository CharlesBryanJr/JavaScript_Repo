function spiralTraverse(array) {
    const spiral_traverse = [];
  
    let start_row = 0;
    let end_row = array.length - 1;
  
    let start_col = 0;
    let end_col = array[0].length - 1;
  
    while(start_row <= end_row && start_col <= end_col){
  
      for(let col = start_col; col <= end_col; ++col){
        const num = array[start_row][col];
        spiral_traverse.push(num)
      }
  
      for(let row = start_row + 1; row <= end_row; ++row){
        const num = array[row][end_col];
        spiral_traverse.push(num)
      }
  
      for(let col = end_col - 1; col >= start_col; --col){
        if(start_row === end_row){
          break;
        }
        const num = array[end_row][col];
        spiral_traverse.push(num)
      }
  
      for(let row = end_row - 1; row > start_row; --row){
        if(start_col === end_col){
          break;
        }
        const num = array[row][start_col];
        spiral_traverse.push(num)
      }
  
      ++start_row;
      --end_row;
      ++start_col;
      --end_col;
    }
  
    return spiral_traverse;
  }
  
  // Do not edit the line below.
  exports.spiralTraverse = spiralTraverse;