// Objekt

const address = {
    firstName: 'Eduard',
    lastName: 'Müller',
    street: 'Anton Ehrnfried-Staße',
    houseNr: 10,
    zipCode: 2020,
    city: 'Hollabrunn'
};

const contact = {
    firstName: `Eduard`,
    lastName: `Müller`,
    email: `eduard.müller@htl-hl.ac.at`,
    phone: `+43 295 233 61`
};

// Objekte zusammenfügen
// const person = Object.assign(address, contact);

// console.log(person);
// console.log(address);
// console.log(contact);

// wenn eine veränderung der objekte nicht gewünscht ist
// -> erster parameter (target) lehres Objekt

const person2 = Object.assign({}, address, contact);

console.log(person2);
console.log(address);
console.log(contact);