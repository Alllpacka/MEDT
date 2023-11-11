const person = {
    firstName: "Eduard",
    lastName: "Müller",
    getFullName: () => {
     const name = `${this.firstName} ${this.lastName}`
     console.log(name);
     return name;
    }
}

console.log(person.getFullName())

// implementierung einer klasse person
class Person {
    // optionale deklatation von eigenschaften
    #firstName;
    #lastName;


    constructor(firstName, lastName) {
        console.log('constructor called')

        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    getFullName() {
        return `${this.#firstName} ${this.#lastName}`;
    }
}

const p = new Person('Eduard', 'Müller');
console.log(p.getFullName());