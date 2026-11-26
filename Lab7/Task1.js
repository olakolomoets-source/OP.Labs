'use strict';

function removeElement(list, value) {
    const position = list.indexOf(value);

    if (position !== -1) {
        list.splice(position, 1);
    }

    return list;
}

module.exports = { removeElement };

const scores = [12, 24, 36, 48, 60];
const fruits = ['apple', 'pear', 'plum', 'peach'];

removeElement(scores, 36);
removeElement(fruits, 'plum');
removeElement(fruits, 'mango');

console.log(scores);
console.log(fruits);