async function print(msg, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        console.log("delay:" + msg);
        resolve(msg);
    }, delay);
});
}

async function f() {
    for await (let a of [print("1", 3000), print("2", 1000)]) {
        console.log("loop:", a);
    }
}

// f();

const SyncArray = {
    [Symbol.iterator]: function() {
        let i = 3;
        return {
            next: () => {
            if (i > 0) {
            i--;
            return {
                value: i
            };
        } else {
            return {
                done: true
            }
        }
    }
    };
    }
};

/**
 * Allows sequential iteration over array of promises
 */
class AsyncArray {
    constructor(data) {
        this.data = data;
    }
    [Symbol.asyncIterator]() {
        let iterator = this.data.values();
        return {
            next: () => {
            let result = iterator.next();
        if (result.value) {
            return result.value().then(value => {
                return {value};
        });
        }
        return {done: true};
    }
    };
    }
}

async function asyncLoop() {
    for await (let a of new AsyncArray([print.bind(null, "1", 3000), print.bind(null, "2", 1000)])) {
        console.log("loop:", a);
    }
}

asyncLoop();