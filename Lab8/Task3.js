'use strict';

function contract(fn, ...types) {
    const resultType = types.pop();

    return function (...args) {
        if (args.length !== types.length) {
            throw new TypeError('Invalid number of arguments');
        }

        for (let i = 0; i < types.length; i++) {
            if (args[i]?.constructor !== types[i]) {
                throw new TypeError(`Argument ${i + 1} should be of type ${types[i].name}`);
            }
        }

        const result = fn(...args);

        if (result?.constructor !== resultType) {
            throw new TypeError(`Result shoud be of type ${resultType.name}`);
        }

        return result;
    };
}

module.exports = { contract };

if (require.main === module) {
    const multiply = (a, b) => a * b;
    const multiplyNumbers = contract(multiply, Number, Number, Number);
    console.log(multiplyNumbers(4, 6));

    const join = (first, second) => first + ' ' + second;
    const joinStrings = contract(join, String, String, String);
    console.log(joinStrings('Good', 'evening'));
}