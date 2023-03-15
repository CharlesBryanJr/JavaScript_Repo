// file_name

console.log(" ");

// Time: O(n^2) | # Space: O(n^2)
function fourNumberSum(array, targetSum) {
    array.sort((a, b) => a - b);


    for(let idx=0; idx<array.length; ++idx){
        let left = idx;
        let right = array.length - 1;

        while(left <= right){
            
        }
    }
}

let array = [7, 6, 4, -1, 1, 2];
let targetSum = 16;
console.log("array:", array);
console.log("targetSum:", targetSum);
console.log("fourNumberSum:", fourNumberSum(array, targetSum));
console.log(" ");
/*
array = [1, 2, 3, 4, 5];
targetSum = 100;
console.log("array:", array);
console.log("targetSum:", targetSum);
console.log("fourNumberSum:", fourNumberSum(array, targetSum));
console.log(" ");

array = [5, -5, -2, 2, 3, -3];
targetSum = 0;
console.log("array:", array);
console.log("targetSum:", targetSum);
console.log("fourNumberSum:", fourNumberSum(array, targetSum));
console.log(" ");

// _recursion
// _iteration
console.log(" ")
*/