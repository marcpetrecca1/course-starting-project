function combine(input1: number | string, input2: number | string) {
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

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
