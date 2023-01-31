/* Generics */
// Generics lock in a type - union types allow all of the given types

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
/* These constraints can be anything - of any type - string, number, union, array, your own type if you had it, ect. */
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: 'Max' }, { age: 30 }));

const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });

// another generic Function

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = 'Got no value';
  if (element.length === 1) {
    description = 'Have 1 element';
  } else if (element.length > 1) {
    description = 'Got ' + element.length + ' elements';
  }
  return [element, description];
}

console.log(countAndDescribe('Hi There'));

console.log(countAndDescribe(['Sports, Cooking']));

console.log(countAndDescribe([]));

// console.log(countAndDescribe(40));
// this won't work because a number doesn't have a length property

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

extractAndConvert({ name: 'Max' }, 'name');

/* Utility Types */
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Max', 'Anna'];
// names.push('Manu');
// names.pop();
