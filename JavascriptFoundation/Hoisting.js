/*
var favoriteFood = "Steak";

var foodThoughts = function(){
    console.log("My favorite Food is "+favoriteFood);

    var favoriteFood = "Sushi";

    console.log("My favorite Food is "+favoriteFood);
}

foodThoughts();

// My favorite Food is undefined
// My favorite Food is Sushi
*/

let favoriteFood = "Steak";

let foodThoughts = function(){
    console.log("My favorite Food is "+favoriteFood);

    let favoriteFood = "Sushi";

    console.log("My favorite Food is "+favoriteFood);
}

foodThoughts();

// VM761:4 Uncaught ReferenceError: Cannot access 'favoriteFood' before initialization at foodThoughts (<anonymous>:4:40) at <anonymous>:11:1