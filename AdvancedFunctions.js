// Closures
// child scope has access to parent scope

const first = () => 
{
    var greet = 'Hi';

    const second = () => 
    {
        alert(greet);
    }

    return second;
}

const newFunc = first();
newFunc();


// Currying
// converting a function that takes multiply argurments 
// into 
// multiply functions that take one argurment
const multiply = (a,b) => a * b; 
const curryiedMultiply = (a) => (b) => a * b;
curryiedMultiply(3);
curryiedMultiply(3)(4);
const multiplyBy5 = curryiedMultiply(5);
multiplyBy5(3);

// Compose
// From two functions, create a third
// output of one function is the input to another function
const sum = (num) => num + 1;

function compose1(f1,g1,a1)
    { return f1(g1(a1)); }
compose1(sum,sum,5);

const compose = (f,g) => (a) => f(g(a));
compose(sum,sum)(5);

// functional purity
// avoiding side effects

