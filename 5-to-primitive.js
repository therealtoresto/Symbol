'use strict';

console.log('"toPrimitive" in Symbol', 'toPrimitive' in Symbol);

const person = { name: 'Taras', age: 22 };

person[Symbol.toPrimitive] = function(hint) {
    console.log('hint', hint);
    const primitives = {
        number: () => this.age,
        string: () => this.name,
        default: () => JSON.stringify(person),
    };
    return primitives[hint]();
};

Object.defineProperty(person, Symbol.toPrimitive, {
    enumerable: false,
    configurable: false,
});

// Usage

console.log(+person);
console.log(`${person}`);
console.log(person + '');