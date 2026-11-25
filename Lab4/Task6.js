'use strict';

const max = (matrix) => {
  let largest = -Infinity;

  for (let row = 0; row < matrix.length; row++) {
    for (let column = 0; column < matrix[row].length; column++) {
      const number = matrix[row][column];

      if (number > largest) {
        largest = number;
      }
    }
  }

  return largest;
};

module.exports = { max };
