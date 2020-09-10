// learning about functional programming!

// first off: pure functions!
// always return the same output given the same input
// Cannot modify anything outside of itself. No side effects!

const array = [1, 2, 3]
// function mutateArray(arr) {
//   arr.pop()
// }

// function mutateArray2(arr) {
//   arr.forEach(item => {
//     arr.push(1)
//   })
// }

// this is not a pure function because it affects objects in the global space.
// mutateArray(array);
// mutateArray2(array);
// console.log(array)

// So how do we write something with no side effects?

// by creating a new array within the function we eliminate side effects
function removeLastItem(arr) {
  const newArray = [].concat(arr);
  newArray.pop()
  return newArray
}

function multiplyBy2(arr) {
  return arr.map(item => item*2)
}
const array2 = removeLastItem(array);
const array3 = multiplyBy2(array);
console.log(array, array2, array3);
// now we have different arrays living on their own with no side effects!

// referential transparency
// -> as long as the input is the same the output will be the same!


// can we do anything without side effects? Are pure functions real?
// input and output are of the outside world, we have to interact with the world to do anything.
// goal of FP is to minimize side effects. 

// what should FP functions do:
// 1. should have 1 task
// 2. should always have a return statement
// 3. pure
// 4. no shared state
// 5. Immutable state
// 6. Composable
// 7. predictable


//IDEMPOTENCE:
//a function that always returns or does what we expect it to do.
function notGood(num) {
  return Math.random(num)
}

notGood()

//deleting a user from a database in an idempotent operation.
//API calls are example of idempotent operations.
//Making our code predictable is hugely valuable in distributed computing.

// IMPERATIVE VS DECLARATIVE
// imperitative code tells the machine what to do and how to do it.
// declarative code tells it what to do and what should happen.

// computers function more imperatively vs humans which are more declarative.

// example: for loops!
// more imperative:
for(let i=0; i < 1000; i++){
  console.log(i)
}

// more declarative:
[1,2,3].forEach(item => console.log(item))