var user = {
    name: "John",
    age: 34,
    hobby: "golf",
    isMarried: true,
    letters: ["A","B","C"],
    shout: function () { return console.log("AHHHHH"); }
};

console.log(user);

console.log(user.name);
console.log(user.age);
console.log(user.hobby);
console.log(user.isMarried);
console.log(user.letters[0]);
console.log(user.shout());

user.favoriteFood ="Steak";
console.log(user.favoriteFood);
 
user.isMarried = false;
console.log(user);

var user1 = {
    name: "Allie",
    age: 21,
    hobby: "tennis",
    isMarried: false,
    letters: ["A","B","C"],
    shout: function (){
        console.log("AHHHHH");
    }
};

var userList = [ user, user1 ]
console.log(userList);

userList[0].isMarried = false;
console.log(userList);
