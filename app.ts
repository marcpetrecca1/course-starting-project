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

function add(a: Combine, b: Combine) {
  // this if statement is known as a type guard
  if (typeof a === 'string' || typeof b === 'string') {
    // what you do with the values does depend on the type
    // either concat
    return a.toString() + b.toString();
  }
  // or add mathematically
  return a + b;
}

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
