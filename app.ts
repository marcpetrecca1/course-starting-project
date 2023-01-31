/* Generics */

// const names: Array<string> = []; // string
// const moreNames: Array<string | number> = []; // string or number (can use union types here)

// const pormise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done');
//   }, 2000);
// });

/* Making our own generics */

/* 
We pass some extra infomation to the merge function so we can work in a better way the the result of the merge function.
They allow you continue working with your data in a typeScript optimal way.
*/

// with U and T we are saying we don't care about the exact type or structure of the objects being passed in (as long as they are different objects in memory)
// what we do care about is that they are objects

/* Generic Type Constraints */
/* extends keyword - after the type you want to constrain - T type can be of any type and structure, but it must be an object*/
/* These constraints can be anything - of any type - string, number, union, array, ect. */
function merge<T extends {}, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: 'Max' }, { age: 30 }));

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
