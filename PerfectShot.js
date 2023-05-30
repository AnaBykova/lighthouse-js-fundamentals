/*
Congratulations, you've been elected as the Mayor of Codeville! Codeville's biggest event of the year, 
the Harvest Festival, will be coming up soon! Each year, the Harvest Festival kicks off with a parade - 
and you want to make sure this is a show the townspeople will remember forever.
You've hired Daria Ducksworth, the town's best photographer, to capture the magic of the Harvest Festival Parade. 
She needs to track the coordinates of the floats to help her capture their best angles.

Complete the logic in the function finalPosition.
For this challenge you'll have to implement a function called finalPosition(moves), which will calculate the 
position of the parade based on an array of directional moves. The parade will move on an X-Y grid like the following.
X Y coordinate grid
Your function will receive an array of moves, which are strings that say either north, south, west, or east, 
these represent the parade moving in a particular direction by a single space on the grid. By looking at the 
path that the parade moves in, your function should calculate and then return an array representing the 
position of the parade after completing all of the moves. The first element of the array should be the X position, 
and the second element of the array should be the Y position. The parade begins at [0,0].

If we called the function with the following arguments.
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
finalPosition(moves);
The finalPosition function should return the array:
[-1, 4]

*/

const finalPosition = function(moves) {
  let position = [0, 0];

  for (const move of moves) {
    if (move === 'north') {
      position[1]++;
    } else if (move === 'south') {
      position[1]--;
    } else if (move === 'west') {
      position[0]--;
    } else if (move === 'east') {
      position[0]++;
    }
  }

  return position;
};

const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];
console.log(finalPosition(moves));