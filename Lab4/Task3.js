'use strict';

const sum = (...args) => {
  let total = 0;
  let index = 0;

  while (index < args.length) {
    total += args[index];
    index++;
  }

  return total;
};

module.exports = { sum };
