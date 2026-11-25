'use strict';

const sum = (...args) => {
  let total = 0;
  let index = 0;

  if (args.length === 0) {
    return total;
  }

  do {
    total += args[index];
    index++;
  } while (index < args.length);

  return total;
};

module.exports = { sum };
