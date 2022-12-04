// reference type

let object1 = {value: 10};
let object2 = object1;
let object3 = {value: 10};

console.log('object1 === object2', object1 === object2);
console.log('object1 === object3 ', object1 === object3);
console.log(' ');
console.log('object2 === object1 ', object2 === object1);
console.log('object2 === object3 ', object2 === object3);
console.log(' ');
console.log('object3 === object1 ', object3 === object1);
console.log('object3 === object2 ', object3 === object2);

console.log(' ');

// context vs scope

function b()
{ let a = 4; }

console.log(this);
this === window;

const object4 = {
    a: function(){ console.log(this); }
}

object4.a();

console.log(' ');

// instantiation

class Player
{
    constructor(name,type)
    {
        this.name = name;
        this.type = type;
    }

    introduce(){ console.log(`Hi I am ${this.name}, I am a ${this.type}`); }
}

const Player1 = new Player("Charles","Student");
console.log(Player1.introduce());
console.log(Player1.name);
console.log(' ');


class Wizard extends Player
{
    constructor(name,type,favoriteSpell)
    {
        super(name,type);
        this.favoriteSpell = favoriteSpell;
    }

    introduce(){ console.log(`Hi, I am a Wizard, my name is ${this.name}, I am a ${this.type} and my favorite spell is ${this.favoriteSpell}`); }
}

const Wizard1 = new Wizard("Chuck","Teacher","Expelliarmus");
console.log(Wizard1.introduce());
console.log(Wizard1.name);
console.log(' ');


// Pass By Value vs Pass By Reference
let a = 5;
let b = a;
++b;
console.log(a);
console.log(b);
console.log(' ');


let c = [1,2,3];
let d = c;
d.push(1234345);
console.log(c);
console.log(d);
console.log(' ');

let e = [].concat(c);
e.push(1234345);
console.log(c);
console.log(e);
console.log(' ');

let obj = 
{ 
    a: 'a', 
    b: 
    {
        random: "try and copy me",
        random2: function nestedFunction(){ return true; }
    }, 
    c: 1
};
let f = Object.assign({}, obj);
let g = {...obj};
let h = JSON.parse(JSON.stringify(obj));
console.log(obj);
obj.c = 5;
obj.b.random2 = false;
console.log(obj);
console.log(f);
console.log(g);
console.log(h);
console.log(' ');






