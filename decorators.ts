/* Decorators  - a function that you apply to something in a certain way.
Decorators execute when your class is defined not when it is intantiated.
*/
function Logger(target: Function) {
  console.log('Logging...');
  console.log(target);
}
@Logger
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating a person');
  }
}

const pers = new Person();

console.log(pers);
