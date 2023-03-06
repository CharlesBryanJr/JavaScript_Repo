console.log('');
const arr = [1, 2, 3, 4];

/*
const doubled = arr.map(function double(num){
    num * 2
});

const doubled = arr.map((num) => {
    num * 2
});

const doubled = arr.map((num) => num * 2);
*/

// const doubled = arr.map(num => num * 2);
// console.log(doubled);
// console.log('');

// const [first, second, ...rest_arr] = arr;
// console.log('first:', first);
// console.log('second:', second);
// console.log('rest_arr:', rest_arr);
// console.log('arr:', arr);
// console.log('');

const person = {
    name: "Charles",
    website: 'FrontEndExpert',
    company: {
        companyName: 'AlgoExpert.io'
    }
};

// const {name: firstName, company = 'AlgoExpert', ...rest_obj} = person;
// console.log('firstName:', firstName);
// console.log('company:', company);
// console.log('rest_obj:', rest_obj);
// console.log('person:', person);
// console.log('');


// function printName({name}){
//     console.log(name);
// }
// console.log(printName(person));
// console.log('');

// function add(x, y){
//     console.log(x+y);
// }
// add(arr[0], arr[1]);
// add(...arr);
// console.log('');

// const arr2 = [5, 6, 7];
// const combined = [0, ...arr, 33, ...arr2];
// console.log(combined);
// console.log('');

// function logParams(x, ...rest){
//     console.log(x);
//     console.log(rest);
// }

// logParams(1);
// logParams(1,2,3,4);
// console.log('');

// const name = 'Charles';
// //const defaultName = name != null ? name : "defaultName";
// const defaultName = name ?? "defaultName";
// console.log('defaultName:', defaultName);
// console.log(`Hello + ${name}, ${1+4}`);
// console.log('person?.company?.website:', person?.company?.website ?? 'Foo');

const shouldRunCode = true;

function logWorld(){
    console.log('Hello World');
}

// if(shouldRunCode){
//     logWorld();
// }

shouldRunCode && logWorld();