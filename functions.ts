function adding(n1: number, n2: number) {
  return n1 + n2;
}

function printingResult(num: number) {
  console.log('Result: ' + num);
}

// void return type - doesn't return anything

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printingResult(adding(5, 12));

let someValue: undefined;

// undefined is a valid return type however - must use void without a return statement

// let combineValues: Function;

let combineValues: (a: number, b: number) => number;

combineValues = adding;
// combineValues = printResult; this will throw an error

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log('Console log', result);
  // you are allowed to return something here in the callback but in the fucntion definition we told typeScript we are not returning anything from the original function so nothing will be done with the return value in the callback
  // will still be able to be compiled with a return statement in the callback
});
