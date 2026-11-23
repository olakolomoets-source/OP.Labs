'use strict';

function array() {
    const items = [];

    const get = (index) => items[index];

    get.push = (value) => {
        items.push(value);
    };

    get.pop = () => items.pop();

    return get;
}

const a = array();

a.push('перше');
a.push('друге');
a.push('третє');

console.log(a(0));
console.log(a(1));
console.log(a(2));

console.log(a.pop());
console.log(a.pop());
console.log(a.pop());
console.log(a.pop());