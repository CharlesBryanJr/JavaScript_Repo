// console.log();
var todo = [
    "clean room",
    "brush teeth",
    "exercise",
    'study javascript',
    'eat healhy'
]

for(var i=0; i<todo.length; ++i){
    console.log(i);
}
console.log(" ");


// todo.forEach( function(todo,i){ console.log(i);})

function logToDo(todo,i)
{ console.log(i); }

todo.forEach(logToDo);