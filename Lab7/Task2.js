'use strict';

function removeElements(list, ...values) {
    values.forEach((value) => {
        const position = list.indexOf(value);

        if (position !== -1) {
            list.splice(position, 1);
        }
    });

    return list;
}

module.exports = { removeElements };

const temperatures = [14, 18, 21, 25, 29, 32];
const subjects = ['English', 'History', 'Math', 'Physics'];

removeElements(temperatures, 18, 29, 32);
removeElements(subjects, 'History', 'Biology', 'Physics');

console.log(temperatures);
console.log(subjects);