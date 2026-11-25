'use strict';

const sum = (...args) => {
  let total = 0;

  for (let index = 0; index < args.length; index++) {
    total += args[index];
  }

  return total;
};

module.exports = { sum };
