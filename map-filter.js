const numbers = [3, 4, 5, 6, 7, 8, 9, 10];
// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// } 

// function square (element){
//     return element * element;
// }
// const square = element => element * element;
// const square = x => x * x;

// const output = numbers.map(function(element){
//    return element * element;
// })
// const result = number.map(x => x * x);
// console.log(result);

 const bigger = numbers.filter(x => x < 9);
  
 const isThere = numbers.find(x => x > 5)

console.log(bigger);