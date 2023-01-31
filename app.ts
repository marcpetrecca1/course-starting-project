type Admin = {
  name: string;
  privaleges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// intersection type
// can also do the same thing with interfaces working with objects - not with union types as stated below tho
type EelevatedEmployee = Admin & Employee;

const e1: EelevatedEmployee = {
  name: 'Max',
  privaleges: ['create-server'],
  startDate: new Date(),
};

type Combine = string | number;
type Numeric = number | boolean;

// intersection type
type Unviersal = Combine & Numeric;

// type guards help us with union types

/* Function overloads - where typeScript cannot infer the correct return type on its own*/

function addTogether(a: number, b: number): number;
function addTogether(a: string, b: string): string;
function addTogether(a: string, b: number): string;
function addTogether(a: number, b: string): string;
function addTogether(a: Combine, b: Combine) {
  // this if statement is known as a type guard
  if (typeof a === 'string' || typeof b === 'string') {
    // what you do with the values does depend on the type
    // either concat
    return a.toString() + b.toString();
  }
  // or add mathematically
  return a + b;
}

const result = addTogether('Max', 'Jones');

type UnknownEmployee = Employee | Admin;

function printEmployee(emp: UnknownEmployee) {
  // use in keyword instead of typeof check - type guard as well
  if ('privaleges' in emp) {
    console.log(emp.privaleges);
  }
  if ('startDate' in emp) {
    console.log(emp.startDate);
  }
}

class Car {
  drive() {
    console.log('Driving');
  }
}

class Truck {
  drive() {
    console.log('Loading Cargo');
  }

  loadCargo(amount: number) {
    console.log(amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  //   if ('loadCargo' in vehicle) {
  //     vehicle.loadCargo(1000);
  //   }
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

/*
discriminated union (pattern)
- available for object types
- works with interfaces and type definitions
- one common property in every object that makes up out union eg. Bird/Horse that describes that object so we can use
this property in our check for 100 percent type safety
*/

interface Bird {
  // literal type as a type guard
  type: 'bird';
  flyingSpeed: number;
}
interface Horse {
  // literal type as a type guard
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  //   if ('flyingSpeed' in animal) {
  //     console.log(animal.flyingSpeed);
  //   }

  // instanceof doesn't work here because we are using an interface
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving speed: ', speed);
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });

/* Type casting */
// - angle bracket type casting
// const userInputElement = <HTMLInputElement>(
//   document.getElementById('user-input')
// );

// - type casting for react
const userInputElement = document.getElementById(
  'user-input'
) as HTMLInputElement;

userInputElement.value = 'Hi there!';

/* Index properites */
interface ErrorContainer {
  // { email: 'not a vlid email'}, username: 'Must start with a cap letter' }
  [prop: string]: string;
  // prop can be a number listed as type string - but type number can't be used with a string key type
}

const errorBag: ErrorContainer = {
  email: 'Not s valid email',
  username: 'Must start with a cap letter',
};
