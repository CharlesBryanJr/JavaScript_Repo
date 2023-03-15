function nonConstructibleChange(coins){
    coins.sort((a, b) => a - b);
  
    let current_change = 0;
  
    for(const coin of coins){
      if(coin > current_change + 1){
        return current_change + 1;
      }
  
      current_change += coin;
    }
  
    return current_change + 1;
  }
  
  // Do not edit the line below.
  exports.nonConstructibleChange = nonConstructibleChange;
  