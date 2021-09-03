const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const part = numbers.slice(2,5);

const removed = numbers.splice(2,3, 88);
// console.log(removed);
// console.log(numbers);

const together = numbers.join(", Hi ");
console.log(together);