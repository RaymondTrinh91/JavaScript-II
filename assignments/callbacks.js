// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/


function getLength(arr, cb) {
  return cb(arr.length);
  // getLength passes the length of the array into the callback.
}
function arrayLength(array){
  console.log(array)
  return array;
}
getLength(items, arrayLength)


function last(arr, cb) {
  return cb(arr[arr.length-1]);
  // last passes the last item of the array into the callback.
}

function lastItem(arrayLast){
    console.log(arrayLast);
    return arrayLast;
}

last(items, lastItem)

function sumNums(x, y, cb) {
  return cb(x, y);
  // sumNums adds two numbers (x, y) and passes the result to the callback.
}
function add (num1, num2){
  console.log(num1 + num2);
  return num1 + num2;

}
sumNums(5,6, add);

function multiplyNums(x, y, cb) {
  return cb(x,y);
  // multiplyNums multiplies two numbers and passes the result to the callback.
}
function multi(num1, num2){
  console.log(num1 * num2);
  return num1 * num2;
}
multiplyNums(5, 6, multi);

function contains(item, list, cb) {
    cb(item, list);
   
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}
function checkcontain(item, array){
  console.log(array.includes(item));
}

contains('Gum', items, checkcontain);

/* STRETCH PROBLEM */

let newArray = [];
function removeDuplicates(arr, cb) {
    cb(arr);
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

function noDup(arr){
  let noDupes = arr.filter((item, index) => arr.indexOf(item) === index);
  // console.log(newArray)
  newArray = noDupes
  return console.log(newArray)
}

removeDuplicates(exitems, noDup)






































