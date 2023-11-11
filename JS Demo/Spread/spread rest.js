const contact = {
    firstName: `Eduard`,
    lastName: `Müller`,
    email: `eduard.müller@htl-hl.ac.at`,
    phone: `+43 295 233 61`
};

// spread/rest
// email und restliche eigenschaften als konstanten
const {email, ...rest} = contact;

console.log(email);
console.log(rest);

// rest parameter in funktion
// ->
function printNumbers(...list) {
    list.forEach(x => console.log(x));
}

printNumbers(1,2,3,4);
printNumbers(0);
printNumbers();

function printAtributes({...atributes}) {
    console.log(atributes);
}

printAtributes({name: 'Hugo', age: 35});