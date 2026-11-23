'use strict';

function seq(...steps) {
    return function next(input) {
        if (typeof input === 'number') {
            return steps.reduceRight((result, step) => step(result), input);
        }

        return seq(...steps, input);
    };
}

console.log(seq(x => x + 6)(x => x * 3)(4));
console.log(seq(x => x * 3)(x => x + 6)(4));
console.log(seq(x => x + 8)(x => x * 5)(x => x / 2)(x => x - 6)(14));