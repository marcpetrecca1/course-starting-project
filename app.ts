// const person: { name: string; age: number } = {
//   name: 'Max',
//   age: 30,
// };

// use type inference
const person = {
  name: 'Max',
  age: 30,
};

console.log(person.name);

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
