'use strict';

function* progression() {
    for (let i = 0; true; i++) {
        let newI = yield i;
        if (newI) {
            i = newI;
        }
    }
}

//var p = progression();
//
//console.log(p.next().value);
//console.log(p.next().value);
//console.log(p.next().value);
//console.log(p.next(10).value);

var arr = [];
for (let a of progression()) {
    console.log(a);
    if (a == 20000) {
        let b = 1;
        console.log(b);
        break;
    }
    //arr.push(a);
}
console.log(arr.length);

//while (!p.next().done) {
//    console.log(p.next().value);
//}