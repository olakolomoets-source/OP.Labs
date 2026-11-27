'use strict';

function iterate(object, callback) {
    for (const key of Object.keys(object)) {
        callback(key, object[key], object);
    }
}

module.exports = { iterate };

if (require.main === module) {
    const points = { math: 95, english: 87, history: 92 };

    iterate(points, (key, value) => {
        console.log({ key, value });
    });
}