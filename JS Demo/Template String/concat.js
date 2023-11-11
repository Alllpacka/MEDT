/*
    Eduard Müller
    Anton Ehrenfried-Straße 10
    2020 Hollabrunn
*/

// Variante 1: einzeilig Zeilenumbrücke mit \n
const address = 'Eduard Müller' + '\n' + 'Anton Ehrenfried-Straße 10' + '\n' + '2020 Hollabrunn';

console.log(address + '\n');


// Variante 2: String concat
const firstName = 'Eduard';
const lastName = 'Müller';
const street = 'Anton Ehrenfried-Straße';
const houseNr = 10;
const zipCode = 2020;
const city = 'Hollabrunn';

const zeile1 = firstName + ' ' + lastName + '\n';
const zeile2 = street + ' ' + houseNr + '\n';
const zeile3 = zipCode + ' ' + city; 

const address2 = zeile1 + zeile2 + zeile3;

console.log(address2)

