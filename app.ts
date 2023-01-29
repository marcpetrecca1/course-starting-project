let userInput: unknown;

// we can store any value in here without getting errors

let userName: string;

// userName = userInput;

// this will throw an error

if (typeof userInput === 'string') {
  userName = userInput;
}

// however, typScript will understand this check and allow you to change the value of username if it is a string
// tyScript works with the typeof oporator very well

function generateError(message: string, code: number): never {
  // we can throw any object or value as an error in js
  throw { message: message, errorCode: code };
  // this funciton never returns a value - ends the script
  // the infered type is void but you can be very clear and implicitly state that never is the return value (the function never returns)
}

generateError('An error occured: ', 500);

const button = document.querySelector('button');

button?.addEventListener('click', () => {
  console.log('Clicked!');
});
