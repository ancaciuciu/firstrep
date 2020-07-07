function add(a, b) { 
return a+b 
} 
console.log(add(4, 6)) 

CODECADEMY CURSUL 1 - INTRODUCERE

console.log(3 + 4); // Prints 7
console.log(5 - 1); // Prints 4
console.log(4 * 2); // Prints 8
console.log(9 / 3); // Prints 3

console.log('hi' + 'ya'); // Prints 'hiya'
console.log('wo' + 'ah'); // Prints 'woah'
console.log('I love to ' + 'code.')
// Prints 'I love to code.'

console.log('Hello'.length); // Prints 5

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

console.log(Math.random()); // Prints a random number between 0 and 1

console.log(Math.floor(Math.random() * 50)); // Prints a random whole number between 0 and 50

console.log(Number.isInteger(2017)); // Check if 2017 is integer

CODECADEMY CURSUL 2 - VARIABILE

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

let price;
console.log(price); // Output: undefined
price = 350;
console.log(price); // Output: 350


const myName = 'Gilberto'; // const -> cannot be reassigned
console.log(myName); // Output: Gilberto