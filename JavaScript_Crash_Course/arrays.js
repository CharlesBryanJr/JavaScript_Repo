console.log('');

const arr = new Array(3).fill(1);
console.log('arr:', arr);
console.log('arr.length:', arr.length);
arr.splice(1,2, 'hello', 'world');
for(let i = 0; i<5; ++i)
{arr.push(1);}
console.log('arr:', arr);
newArr = arr.slice(2,5);
console.log("newArr:", newArr);
console.log('');

const array = [1,2,3,3];
console.log('array:', array);
console.log('array[1]:', array[1]);
console.log(array.includes(1));
console.log(array.indexOf(1));
console.log(array.lastIndexOf(3));
array.push(18,38,42);
console.log('array:', array);
console.log('array:', array);
console.log('pop():', array.pop());
console.log('pop():', array.pop());
console.log('array:', array);
console.log('');


for(let i = 0; i < 4; ++i){
    console.log(i);
}
console.log('');

for(const value in array){
    console.log(value);
}
console.log('');

array.forEach(function(value, index){
    console.log(value, index);
});
console.log('');

const nums = [1, 2, 3];
const map_nums = nums.map(function(value, index, array){
    return value + this.num;
}, {num: 10});
console.log('map_nums:', map_nums);
console.log('');

const filter_num = nums.filter(function(value, index, array){
    return value > this.num;
}, {num: 2});
console.log('filter_num:', filter_num);
console.log('');

const found_value = nums.find(function(value, index, array){
    return value > this.num;
}, {num: 2});
console.log('found_value:', found_value);
console.log('');

const found_idx = nums.findIndex(function(value, index, array){
    return value > this.num;
}, {num: 2});
console.log('found_idx:', found_idx);
console.log('');

const all_passed = nums.every(function(value, index, array){
    return value > this.num;
}, {num: 2});
console.log('all_passed:', all_passed);
console.log('');

const some_passed = nums.some(function(value, index, array){
    return value > this.num;
}, {num: 2});
console.log('all_pasome_passedssed:', some_passed);
console.log('');

const sum = nums.reduce(function(acc, value){
    return acc + value;
}, 0);
console.log('sum:', sum);
console.log('');

const diff = nums.reduceRight(function(acc, value){
    return acc - value;
}, 0);
console.log('sum_rdiffight:', diff);
console.log('');

const arr1 = [5, 7, 3, 0];
arr1.sort();
console.log('arr1:', arr1);
console.log('');

function compare_numbers(first_num, second_num){
    console.log('first_num:', first_num);
    console.log('second_num:', second_num);
    console.log('first_num - second_num:', first_num - second_num);
    return first_num - second_num;
}
// -1 <, first num
// 1 >, second num
// 0, as is
const arr2 = [5, 7, 3, 0];
arr2.sort(compare_numbers);
console.log('arr2:', arr2);
console.log('');


