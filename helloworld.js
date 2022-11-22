// Comment

function multiply(a,b){
    if( a>10 || b>10 ){ return "error: input is too large"; }
    else{ return a * b; }
}

alert(multiply(3,4));

var a = function(a,b){
    if( a>10 || b>10 ){ return "error: input is too large"; }
    else{ return a * b; }
}

alert(a(3,4));


