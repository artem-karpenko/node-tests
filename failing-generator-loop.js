'use strict';

function* progression() {
    for (let i = 0; true; i++) {
        yield i;
    }
}

// this fails at a = 12290 (in IDEA and in cmd)
// for (let a of progression()) {
//     console.log(a);
// }

// this fails at a = 6146
// for (let a of progression()) {
//     console.log(a);
//     if (a == 12290) {
//         break;
//     }
// }

// this fails at a = 4098
for (let a of progression()) {
    console.log(a);
    if (a == 12290) {
        console.log(1);
        break;
    }
}