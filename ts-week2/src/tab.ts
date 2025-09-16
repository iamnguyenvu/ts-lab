function hello(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, 2000);
    });
}

// hello().then((message) => {
//     console.log(message);
// });

function number(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    });
}

number().then((value) => {
    console.log(value);
});