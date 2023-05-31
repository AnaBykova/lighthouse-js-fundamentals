/*
Creating a long array of repeating numbers can be a time consuming task. Imagine creating an array of every 
even number from 0 to 100. In this challenge, we will build a function that creates an array like this for a 
given start, end, and step parameter.

Define a function called range
The function takes 3 integer parameters: start, end, and step.
The function should return an array of numbers from start to end counting by step.
For example:

code	            output
range(0, 10, 2);	[ 0, 2, 4, 6, 8, 10 ]
range(10, 30, 5);	[ 10, 15, 20, 25, 30 ]
range(-5, 2, 3);	[ -5, -2, 1 ]

The function should return an empty array [] if given incorrect parameters, such as:
start, end, or step being undefined
start being greater than end
step being 0, or negative

At some point in your code, you may want to use some_array.push(some_value)
You may paste the following code after your function definition to help you verify it works correctly:
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
*/
function range(start, end, step) {
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return [];
  }
  
  const result = [];
  for (let i = start; i <= end; i += step) {
    result.push(i);
  }
  
  return result;
}

console.log(range(0, 10, 2));   // Output: [0, 2, 4, 6, 8, 10]
console.log(range(10, 30, 5));  // Output: [10, 15, 20, 25, 30]
console.log(range(-5, 2, 3));   // Output: [-5, -2, 1]
console.log(range(0, 10, -1));  // Output: []
console.log(range(10, 5, 2));   // Output: []
console.log(range(0, 10));      // Output: []