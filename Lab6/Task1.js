'use strict';

const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new TypeError('All arguments must be functions');
        }
    }

    return (x) => fns.reduce((result, fn) => fn(result), x);
};

module.exports = { pipe };

if (require.main === module) {
    const inc = (x) => x + 1;
    const twice = (x) => x * 2;
    const cube = (x) => x ** 3;

    const f = pipe(inc, twice, cube);
    console.log(f(3)); 

    const addTwo = pipe(inc, inc);
    console.log(addTwo(10)); 

    try {
        pipe(inc, 14, cube);
    } catch (error) {
        console.log(error.name, error.message);
    }
}