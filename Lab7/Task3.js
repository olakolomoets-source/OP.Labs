'use strict';

function unique(list) {
    const result = [];

    list.forEach((value) => {
        if (!result.includes(value)) {
            result.push(value);
        }
    });

    return result;
}

module.exports = { unique };

const measurements = [18, 42, 18, 27, 42, 35];
const colors = ['teal', 'violet', 'teal', 'coral', 'violet'];

console.log(unique(measurements));
console.log(unique(colors));