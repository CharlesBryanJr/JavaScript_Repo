let num = 9.81;
console.log("num");
console.log(num);
console.log(Math.floor(num));
console.log(Math.round(num));
num = 20;
console.log(num);

const person = {
    name: 'Charles',
    course: 'FrontEndExpret',
};

console.log(JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));
person.name = "chuck";
console.log(person.name);

const map = new Map();
map.set(123, "Hello");
map.set(123, "World");
console.log(map.get(123));

const set = new Set();
set.add('hello');
set.add('world');
console.log(set);
console.log(set.has('hello world'));
set.delete('hello');
console.log(set.size);

const arr = [1, 2, 3];
console.log(arr[1]);
arr.push(4)
console.log(arr);

function addtwo(num = 2){
    return num + 2;
}
console.log(addtwo());

function callfunc(func, parm){
    console.log(func(parm));
}

callfunc(addtwo, 2);

console.log();

for(let i = 0; i < 4; i++){
    if (i === 1){
        continue;
    }
    console.log(i);
}
console.log();

let idx = 0
while(idx < 4){
    console.log(idx);
    idx++
}
console.log();

for(const value of [1, 2, 3]){
    console.log(value);
}
console.log();

for(const char of "hello world"){
    console.log(char);
}

for(const key in person){
    console.log(key, person[key]);
}
console.log();

[1, 2, 3].forEach(function(value){
    console.log(value);
});
console.log();

try{
    throw new Error('oh no');
} catch(error){
    console.log(error);
}
console.log();

console.log(5 > 3 ? "A" : "B");

console.table([1, 2], ["Hello", "World"])