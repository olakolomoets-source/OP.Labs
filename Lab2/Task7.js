
'use strict';

const fn = () => {
    const objConst = { name: 'Olha' };
    let objLet = { name: 'Anna' };

    objConst.name = 'Maria';
    objLet.name = 'Eva';

    // objConst = { name: 'Sofia' }; // Error
    objLet = { name: 'Sofia' };

    console.log(objConst);
    console.log(objLet);
};

fn();
