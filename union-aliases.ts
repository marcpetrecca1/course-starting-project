// type alias
type Combinable = string | number;
type Descriptor = 'as-number' | 'as-text';

function combine(input1: Combinable, input2: Combinable) {
  // workaround at runtime - often times must include this if logic to avoid error in development
  let result: number | string;
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

/*
combine(input1: number | string, input2: number | string)

typeScript throws an error here becasue it only sees a union type, not what is inside the union type.

WORKAROUND - often times must include this if logic to avoid error in development - won't always need it
*/

function combining(
  input1: Combinable,
  input2: Combinable,
  resultType: Descriptor
) {
  // resultType is a union type of literal types - the types that are based on your core types (string/number) but then you have a specific version of that type (stricly those two values)
  let result: number | string;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultType === 'as-number'
  ) {
    // if any of the strings passed in aren't numbers you will get Nan as output
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  //   if (resultType === 'as-number') {
  //     return +result;
  //   } else {
  //     return result.toString();
  //   }
  return result;
}
// const combinedAges = combine(30, 26, 'as-number');
// console.log(combinedAges);

// const combinedStringNames = combine('Max', 'Anna', 'as-number');

// const combinedNames = combine('Max', 'Anna', 'as-text');
// console.log(combinedNames);

const combinedAges = combining(30, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combining('30', '26', 'as-number');
console.log(combinedStringAges);

const combinedNames = combining('Max', 'Anna', 'as-text');
console.log(combinedNames);

/*
Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.
*/

type User = { name: string; age: number };
const u1: User = { name: 'Max', age: 30 }; // this works!

/*
This allows you to avoid unnecessary repetition and manage types centrally.
*/

// function greet(user: { name: string; age: number }) {
//   console.log('Hi, I am ' + user.name);
// }

// function isOlder(user: { name: string; age: number }, checkAge: number) {
//   return checkAge > user.age;
// }

function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
