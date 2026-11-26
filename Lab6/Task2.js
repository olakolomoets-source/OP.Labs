'use strict';

const compose = (...fns) => {
    const errorHandlers = [];

    const f = (x) => {
        try {
            return fns.reduceRight((result, fn) => fn(result), x);
        } catch (error) {
            for (const handler of errorHandlers) {
                handler(error);
            }

            return undefined;
        }
    };

    f.on = (event, handler) => {
        if (event === 'error') {
            errorHandlers.push(handler);
        }
    };

    return f;
};

module.exports = { compose };

if (require.main === module) {
    const inc = (x) => x + 1;
    const twice = (x) => x * 2;
    const cube = (x) => x ** 3;

    const fail = () => {
        throw new Error('Failed to execute the function');
    };

    const f = compose(inc, twice, cube);
    console.log(f(4)); 

    const addTwo = compose(inc, inc);
    console.log(addTwo(13)); 

    const withError = compose(inc, fail, cube);
    withError.on('error', (error) => {
        console.log('Error:', error.message);
    });

    console.log(withError(6)); 
}