const variable = 'external';
const price = 99;
const website = {
    name: 'AlgoExpert',
    rating: 5,
    founders: ['Clement', 'Antonie'],
    cost: price,
    price,
    "muti word key": true,
    [variable]: 1234,
    sayHello: () => console.log("hello"),
    sayBye(){
        console.log('bye');
    },
    get getRating(){
        return this.rating;
    },
    set setRating(value){
        this.rating = value;
    }
};
console.log('website:', website);
console.log('website.name:', website.name);
console.log('website[name]:', website['name']);
const key = 'name';
console.log('website[key]:', website[key]);
website.name = 'FrontEndExpert';
console.log('website[key]:', website[key]);
website.foo = 'bar';
console.log('website:', website);
delete website.foo;
console.log('website:', website);
website.sayHello();
website.sayBye();
console.log(website.getRating);
website.setRating = 13
console.log(website.getRating);
console.log('');

const web_app = {
    foo: 'bar',
    'hello': 'world',
    [Symbol('id')]: 0,
    __proto__: website,
    return2: () => console.log("2")
};
console.log('web_app:', web_app);
console.log('web_app.name:', web_app.name);
console.log('');

console.log(Object.keys(web_app));
console.log(Object.values(web_app));
console.log(Object.entries(web_app));
Object.entries(web_app).forEach(function([key, value], index){
    console.log(index, key, value);
});
console.log('');

for(const key in web_app){
    console.log(key);
};
console.log('');

const my_web_app = {
    original: 123
};
console.log('my_web_app:', my_web_app);
Object.assign(my_web_app, web_app);
console.log('my_web_app:', my_web_app);

console.log('');




const obj = new Object();
obj.name = 'Charles';
console.log('obj:', obj);
console.log('');

function Website(name, rating, founders){
    this.name = name;
    this.rating = rating;
    this.founders = founders;
}

const FrontEndExpert = new Website('FrontEndExpert', 5, ['Charles', 'Morgan']);
console.log('FrontEndExpert:', FrontEndExpert);
console.log('');

const id1 = Symbol('id1');
const id2 = Symbol('id2');
const id3 = Symbol.for('id3');
const id4 = Symbol.for('id3');
console.log(id3 === id4);
const obj1 = {
    [id1]: 1234,
    [id2]: 0
}
console.log('obj1:',obj1);
console.log('name' in website);
console.log(website.hasOwnProperty('name'));
console.log('toString' in website);
console.log(website.hasOwnProperty('toString'));
console.log('');