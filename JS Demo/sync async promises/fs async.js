import { readFile } from 'node:fs';

console.log('A');

const fileContent = readFile('./input.txt', 'utf-8', callback);

console.log('C');

const callback = (error, data) => {
    if(error !== null) {
        console.error(error.message);
    } else {
        console.log('B')
        console.log(data);
    }
}