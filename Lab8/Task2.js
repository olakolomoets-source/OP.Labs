'use strict';

function store(value) {
    return () => value;
}

module.exports = { store };

if (require.main === module) {
    const read = store(12);
    const value = read();

    console.log(value);
}