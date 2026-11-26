'use strict';

function difference(source, excluded) {
    return source.filter((value) => !excluded.includes(value));
}

module.exports = { difference };

const numbers = [24, -8, 36, 52, 17];
const excludedNumbers = [36, 17, 99];

const plannedCities = ['Lviv', 'Odesa', 'Dnipro', 'Uzhhorod'];
const visitedCities = ['Odesa', 'Dnipro', 'Chernihiv'];

console.log(difference(numbers, excludedNumbers));
console.log(difference(plannedCities, visitedCities));