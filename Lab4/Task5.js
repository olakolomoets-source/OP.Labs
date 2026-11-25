'use strict';

const sum = (...args) => args.reduce((total, number) => total + number, 0);

module.exports = { sum };
