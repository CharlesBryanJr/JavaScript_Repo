// string padding

"Hello World".padStart();
"Hello World".padEnd();

// trailing commas in functions, param list and class
const fun = (a,b,c,d,)
{
    console.log(a);
}

fun(1,2,3,4,);

console.log(' ');
// object.keys
// object.values
// object.entires

let obj = {
    username0: 'Santa',
    username1: 'Elf',
    username2: 'Mr.Grinch'
}


Object.keys(obj).forEach((key,index) => 
{
    console.log(key,obj[key]);
});
console.log(' ');

Object.values(obj).forEach( value => console.log(value) );
console.log(' ');

Object.entries(obj).forEach( value => console.log(value) );
console.log(' ');

console.log(' ');

Object.entries(obj).map(value => 
    { return value[1] + value[0].replace('username', ' '); });




// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle.padStart(5);
rabbit.padStart(5);


// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'

// when you do:
console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');


// #3) Get the below object to go from:
let obj1 = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// to this:
'my name is Rudolf the raindeer'

Object.entries(obj).map(value => value.join(" ")).join(' ');