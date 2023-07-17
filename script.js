//1

let result = 5 + 5 + '5';
console.log(result);
console.log(typeof result);

//2

let email = 'dang6r.lla2zy@gmail.com';
console.log(email.includes('@'));
console.log(email.length);

//3

let nameOne = 'My';
let nameTwo = 'name';
let nameThree = 'is';

let fullName = `${nameOne} ${nameTwo} ${nameThree} Viktor`;
console.log(fullName);

//4

let userName = prompt('Введіть ваше Імя:');
let payment = 100;

console.log(`Дякуємо, ${userName}! До сплати ${payment} гривень`);
