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

// spread operator: ...
const person = {...address, ...contact, counry: `Österreich`};

console.log(person);
console.log(address);
console.log(contact);