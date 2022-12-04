console.log(' ')

const basket = ['apples', 'oranges', 'grapes'];

for(let item = 0; item<basket.length; ++item)
{ console.log(basket[item]); }
console.log(' ');

basket.forEach(item => 
{ console.log(basket[item]); })
console.log(' ');

// for of 
// iterating over arrays && strings
for (const item of basket) 
{ console.log(basket[item]); }
console.log(' ');

// for in (objects)
// enumerating over object properties

const detailedBasket = 
{
    apples: 5,
    oranges: 10,
    grapes: 1000
};

for (item in detailedBasket) 
{ console.log(detailedBasket[item]); }
console.log(' ');