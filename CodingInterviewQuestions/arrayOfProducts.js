// file_name

console.log(" ");

/*

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

// Time: O(n) | # Space: O(n)
function arrayOfProducts(array) {
    const left_to_right = new Array(array.length).fill(1);
    let products = 1;
    for(let idx=0; idx<array.length; ++idx){
        left_to_right[idx] = products;
        products *= array[idx];
    }

    const right_to_left = new Array(array.length).fill(1);
    products = 1;
    for(let idx=array.length - 1; idx>=0; --idx){
        right_to_left[idx] = products;
        products *= array[idx];
    }

    const array_of_products = new Array(array.length).fill(1);
    for(let idx=0; idx<array.length; ++idx){
        array_of_products[idx] = left_to_right[idx] * right_to_left[idx];
    }

    return array_of_products;
}

let array = [5, 1, 4, 2];
console.log("array:", array);
console.log("arrayOfProducts:", arrayOfProducts(array));
console.log(" ");


array = [-5, 2, -4, 14, -6];
console.log("array:", array);
console.log("arrayOfProducts:", arrayOfProducts(array));
console.log(" ");

array = [-1, -1, -1, -1];
console.log("array:", array);
console.log("arrayOfProducts:", arrayOfProducts(array));
console.log(" ");

// _recursion
// _iteration
console.log(" ")
