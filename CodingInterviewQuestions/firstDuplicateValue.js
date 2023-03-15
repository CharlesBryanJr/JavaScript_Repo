// file_name

console.log(" ");

/*

Question:
-

Type of Question:
- Array
		- draw indices
		- sorting
    - multiple pointers
    - mutating the current index or later index to count
    - hashing the index values
		- running sums
		- sliding windows
			- start_of_window
			- end_of_window
*/

// Time: O(n) | # Space: O(1)
function firstDuplicateValue(array){

    for(let idx = 0; idx<array.length; ++idx){
        const abs_value = Math.abs(array[idx]);

        if(array[abs_value - 1] < 0){
            return abs_value;
        }

        array[abs_value - 1] *= -1; 
    }
    return -1;
}

let array = [2, 1, 5, 2, 3, 3, 4];
console.log("array:", array);
console.log("firstDuplicateValue:", firstDuplicateValue(array));
console.log(" ");

array = [7, 6, 5, 3, 6, 4, 3, 5, 2];
console.log("array:", array);
console.log("firstDuplicateValue:", firstDuplicateValue(array));
console.log(" ");

array = [3, 3, 1, 1];
console.log("array:", array);
console.log("firstDuplicateValue:", firstDuplicateValue(array));
console.log(" ");

// _recursion
// _iteration
console.log(" ");