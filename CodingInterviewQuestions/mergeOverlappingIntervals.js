// file_name

console.log(" ");

// Time: O(nlog(n)) | # Space: O(n)
function mergeOverlappingIntervals(array){
    array.sort((a, b) => a[0] - b[0]);
    const OverlappingIntervals = [[array[0][0], array[0][1]]];
    
    let idx = 0;
    while(idx < array.length){
		let overlapping_intervals = false;

    	let start = array[idx][0];
        let end = array[idx][1];

        let len = OverlappingIntervals.length - 1;
		let interval_start = OverlappingIntervals[len][0];
		let interval_end = OverlappingIntervals[len][1];

		if(start <= interval_end){
			OverlappingIntervals[len][1] = Math.max(end, interval_end);
		}
		else{
			OverlappingIntervals.push([start, end]);
		}

		++idx;
    }

    return OverlappingIntervals;
}

let intervals = [
    [1, 2],
    [3, 5],
    [4, 7],
    [6, 8],
    [9, 10]
];
console.log("intervals:", intervals);
console.log("mergeOverlappingIntervals:", mergeOverlappingIntervals(intervals));
console.log(" ");

intervals = [
    [100, 105],
    [1, 104]
];
console.log("intervals:", intervals);
console.log("mergeOverlappingIntervals:", mergeOverlappingIntervals(intervals));
console.log(" ");

intervals = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 1]
];
console.log("intervals:", intervals);
console.log("mergeOverlappingIntervals:", mergeOverlappingIntervals(intervals));
console.log(" ");

// _recursion
// _iteration
console.log(" ")