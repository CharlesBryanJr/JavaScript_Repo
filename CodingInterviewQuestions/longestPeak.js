// file_name

console.log(" ");

// Time: O(n) | # Space: O(1)
function longestPeak(array) {
    let longest_peak = 0;
    
    let idx = 1;
    while(idx < array.length - 1){
        const isPeak = (array[idx - 1] < array[idx]) && (array[idx] > array[idx + 1]);
        if(!(isPeak)){
            ++idx;
            continue;
        }

        const left_idx = count_left(idx - 2, array);

        const right_idx = count_right(idx + 2, array);

        const peak_length = right_idx - left_idx - 1;
        
        longest_peak = Math.max(peak_length, longest_peak);
        
        idx = right_idx;
    }

    return longest_peak;
}

function count_left(idx, array){
    while(idx >= 0 && array[idx] < array[idx + 1]){
        --idx;
    }

    return idx;
}

function count_right(idx, array){
    while(idx < array.length && array[idx - 1] > array[idx]){
        ++idx;
    }

    return idx;
}

let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
console.log("array:", array);
console.log("longestPeak:", longestPeak(array));
display(array)
console.log(" ");
/*
array = [1, 2, 3, 4, 5, 1]
console.log("array:", array);
console.log("longestPeak:", longestPeak(array));
console.log(" ");

array = [5, 4, 3, 2, 1, 2, 10, 12]
console.log("array:", array);
console.log("longestPeak:", longestPeak(array));
console.log(" ");

// _recursion
// _iteration
console.log(" ");
*/