/*
We've sent out two researchers to determine, on a scale of 1-10, how much people like lighthouses and they 
are hitting the streets of Canada to find out what people think.

Both researchers have stored their numbers in array for each location. This means that we have two different 
arrays of data for every single location, but we only want a single array for each location. We're going to 
have to concatenate the arrays from both researchers into a single array.

Define a function called concat

The function should, when given two arrays, concatenate the arrays together.

For example:
code	                            output
concat([ 1, 2, 3 ], [ 4, 5, 6 ]);	[ 1, 2, 3, 4, 5, 6 ]
concat([ 0, 3, 1 ], [ 9, 7, 2 ]);	[ 0, 3, 1, 9, 7, 2 ]
concat([], [ 9, 7, 2 ]);	        [ 9, 7, 2 ]
concat([ 5, 10 ], []);	          [ 5, 10 ]

Tips
You may paste the following code after your function definition to help you verify it works correctly:
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);
*/
function concat(array1, array2) {
  return array1.concat(array2);
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);