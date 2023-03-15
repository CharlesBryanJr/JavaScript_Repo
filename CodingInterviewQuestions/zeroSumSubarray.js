// file_name

console.log(" ");

// Time: O(n) | # Space: O(n)
function zeroSumSubarray(nums){
    const sums = new Set([0]);
    let running_sum = 0;

    for(const value of nums){
        running_sum += value;

        if(sums.has(running_sum)){
            return true;
        }
        else{
            sums.add(running_sum);
        }
    }

    return false;
}

let nums = [1, 2, 3, -2, -1];
console.log("nums:", nums);
console.log("zeroSumSubarray:", zeroSumSubarray(nums));
console.log(" ");

nums = [-1, -1, -1];
console.log("nums:", nums);
console.log("zeroSumSubarray:", zeroSumSubarray(nums));
console.log(" ");

nums = [2, 3, 4, -5, -3, 5, 5];
console.log("nums:", nums);
console.log("zeroSumSubarray:", zeroSumSubarray(nums));
console.log(" ");

// _recursion
// _iteration
console.log(" ")