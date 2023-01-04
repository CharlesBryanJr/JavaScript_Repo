function printName(){
    return 'Charles Bryan';
}

function findName(){
    return printName();
}

function sayMyName(){
    return findName();
}

global.sayMyName();
console.log(' ');


