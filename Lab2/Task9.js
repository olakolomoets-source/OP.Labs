
'use strict';

const phoneBook = [
    { name: 'Anna', phone: '+3801112233' },
    { name: 'Maria', phone: '+3804445566' },
    { name: 'Jay', phone: '+3807778899' },
    { name: 'Ivan', phone: '+3800001111' }
];

const findPhoneByName = (name) => {
    for (const person of phoneBook) {
        if (person.name === name) {
            return person.phone;
        }
    }
};

console.log(findPhoneByName('Anna'));
console.log(findPhoneByName('Ivan'));
