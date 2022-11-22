// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

function checkDriverAge(age = -1){

    var age = prompt("What is your age?");

    if (Number(age) < 18) { alert("Sorry, you are too yound to drive this car. Powering off"); } 
    else if (Number(age) > 18) { alert("Powering On. Enjoy the ride!"); } 
    else if (Number(age) === 18) { alert("Congratulations on your first year of driving. Enjoy the ride!"); }
}

checkDriverAge();z