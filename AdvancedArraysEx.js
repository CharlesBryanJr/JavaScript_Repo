// Complete the below questions using this array:
const array = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  ];
  
  // Create an array using forEach that has all the usernames with a "!" to each of the usernames
  const forEachArray = [];
  array.forEach( i => forEachArray.push( i.username + '!' ) );
  console.log('forEachArray');
  console.log(forEachArray);
  console.log(' ');
  
  // Create an array using map that has all the usernames with a "? to each of the usernames
  const mapArray = array.map( i => i.username + '?' );
  console.log('mapArray');
  console.log(mapArray);
  console.log(' ');

  // Filter the array to only include users who are on team: red
  const filterArray = array.filter( i => i.team === 'red');
  console.log('filterArray');
  console.log(filterArray);
  console.log(' ');
  
  // Find out the total score of all users using reduce
  const reduceArray = array.reduce( (acc,i) => 
  {
    return acc += i.score;
  },0);
  console.log('reduceArray');
  console.log(reduceArray);
  console.log(' ');

  
  // (1), what is the value of i?
  // (2), Make this map function pure:
  const arrayNum = [1, 2, 4, 5, 8, 9];
  const newArray = arrayNum.map((num, i) => num * 2)
  
  //BONUS: create a new list with all user information, but add "!" to the end of each items they own.
  