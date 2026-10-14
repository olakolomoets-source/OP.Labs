
'use strict';

const phoneBook = {
    'Anna': '+3801112233',
    'Maria': '+3804445566',
    'Jay': '+3807778899',
    'Ivan': '+3800001111'
};

const findPhoneByName = (name) => {
    return phoneBook[name];
};

console.log(findPhoneByName('Maria'));
console.log(findPhoneByName('Jay'));
