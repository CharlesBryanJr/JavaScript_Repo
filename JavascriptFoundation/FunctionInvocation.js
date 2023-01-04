console.log(' ');

// Function Declaration
// Fully Hoisted
function india(){
    console.log('warm');
}

// Function Expression
// variable name is hoisted and set to undefined
var canada = function(){
    console.log('cold');
}

// Function Invocation / calling a function / function execution
india();
canada();

function Mary(person1,person2){
    console.log(arguments);
    console.log(' ');
    console.log(Array.from(arguments));
    console.log(' ');
    console.log(`${person1} and ${person2}`);
}

console.log(' ');
Mary("John","Jane");
console.log(' ');


function Mary2(...arrgs){
    console.log(arrgs);
    console.log(' ');
    console.log(Array.from(arguments));
    console.log(' ');
    console.log(`${arrgs[0]} and ${arrgs[1]}`);
}

console.log(' ');
Mary2("John","Jane");
console.log(' ');