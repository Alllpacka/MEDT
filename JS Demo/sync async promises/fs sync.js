import { readFileSync } from 'node:fs';

console.log('A');
const fileContent = readFileSync('./input.txt', 'utf-8');

console.log('B');

console.log(fileContent);

console.log('C');