"use strict";
// // 
Object.defineProperty(exports, "__esModule", { value: true });
// function createPromise(): Promise<string> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = true;
//             if(success) console.log('Success!');
//             else reject('Failure');
//         }, 1000);
//     })
// }
// async function run() {
//     try {
//         const result = await createPromise();
//         console.log("Result:", result);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }
// run();
function simulateIO(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}
function now(label) {
    console.log(`${label}: ${Date.now().toLocaleString("vi")}`);
}
async function runSequential() {
    now("Start");
    const result1 = await simulateIO("Task 1", 1000);
    now("After Task 1");
    const result2 = await simulateIO("Task 2", 1000);
    now("After Task 2");
    console.log("Results:", result1, result2);
}
// runSequential();
async function runParallel() {
    now("Start");
    const [result1, result2] = await Promise.all([
        simulateIO("Task 1", 1000),
        simulateIO("Task 2", 1000)
    ]);
    now("After Tasks");
    console.log("Results:", result1, result2);
    const [result3, result4] = await Promise.all([result1, result2]);
    now("After Combining Results");
    console.log("Results:", result3, result4);
}
runParallel();
//# sourceMappingURL=test.js.map