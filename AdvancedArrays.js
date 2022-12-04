// map, filter, reduce

// map
// transforms and returns an element to a new array
let array = [1,2,10,16];

const double = [];
const newArray = array.forEach( (i) => { double.push(i * 2); } );
//const newArray = array.forEach( i => double.push(i * 2) );

console.log('double', double);

const mapArray = array.map( (i) => { return i * 2; } );
//const mapArray = array.map( i => i * 2 )

console.log('map', mapArray);

// filter

const filterArray = array.filter( i => i > 5 );
console.log('filter', filterArray);

// reduce

const reduceArray = array.reduce((accumlator,i) => 
{ 
    return accumlator + i;
}, 5);
console.log('reduce', reduceArray);
