
'use strict';

const items = [true, 'hello', 5, 12, -200, false, false, 'word', 3.14, 'Kyiv', 50, 'Anna', 17, true, 'world', 20000];
const collection = {};

for (const item of items) {
    if (collection[typeof item] === undefined) {
        collection[typeof item] = 1;
    } else {
        collection[typeof item] += 1;
    }
}
console.log(collection);
