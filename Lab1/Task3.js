
'use strict';

const items = [true, 'hello', 5, 12, -200, false, false, 'word', 3.14, 'Kyiv', 50, 'Anna', 17, true, 'world', 20000];
const collection = {};

for (const item of items) {
    collection[typeof item] = (collection[typeof item] || 0) + 1;
}
console.log(collection);
