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
