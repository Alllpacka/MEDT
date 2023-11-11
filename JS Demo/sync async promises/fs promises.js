import { readFile } from 'node:fs/promises';

console.log('A');

const promise = readFile('./input.txt', 'utf-8');
console.log(promise);

// // Variante 1
// promise.then((data) => {
//     console.log(data);
// });

// promise.catch((error) => {
//     console.error(error.message);
// })

// Variante 2
promise.then((data) => {
    console.log('B');
    console.log(data);
    console.log(promise)
}).catch((error) => {
    console.error(error.message);
})

console.log('C');

// // Variante 3
// promise.then(
//     (data) => {console.log(data);}
//     (error) => {console.error(error.message)}
// );

