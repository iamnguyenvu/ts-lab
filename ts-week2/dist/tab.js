"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, 2000);
    });
}
hello().then((message) => {
    console.log(message);
});
function number() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
}
number().then((value) => {
    console.log(value);
});
//# sourceMappingURL=tab.js.map