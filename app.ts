// const person: { name: string; age: number } = {
//   name: 'Max',
//   age: 30,
// };

// use type inference
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Max',
//   age: 30,
//   hobbies: ['soccer', 'baseball'],
//   role: [2, 'author'],
// };

/* Tuples - fixed length array*/
// type inference will not pick up on the tuple type so you must explicitly state it (will give you a union type instead)
// person.role.push('admin'); this will not throw an error - an exception you must be aware of
// person.role[1] = 10; - this WILL throw an error
// tuple length will be enforced during reassignment but not with pushing and so on
// these would both work - but we want a tuple - first element number, second element string

/* Enum */
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

/*
ADMIN = 1
READ_ONLY = 2
AUTHOR = 3
and so on ... 
*/

enum OtherRole {
  ADMIN = 5,
  READ_ONLY,
  AUTHOR,
}

// In this enum, the numbers start autoincrementing after 5

enum AnotherRole {
  ADMIN = 'hello',
  READ_ONLY = 100,
  AUTHOR = 'another',
}

// You can assign a string or number to the value of a property if not implied by inference - inference looks for numerical values

const person = {
  name: 'Max',
  age: 30,
  hobbies: ['soccer', 'baseball'],
  role: Role.ADMIN,
};

for (let i = 0; i < person.hobbies.length; i++) {
  console.log(person.hobbies[i].toUpperCase());
  // typeScript infers the methods given to type string
}

const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!',
  },
};

// this object type would be

/*
{
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  }
}
*/

// So you have an object type in an object type so to say.
