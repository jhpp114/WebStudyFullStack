// setTimeout
// setInterval

//  sayHello(): simply console out hello
function sayHello(toWho) {
    console.log("Hello " + toWho);
}
setTimeout(function(){ 
    sayHello("Park");
}, 3 *1000);
// Levels of logs
// console.log()
// console.info()
// console.warn()
// console.error()
// One interesting part is since the setTimeout is async function
// Console out run first
console.log('log', 'log message');
console.info('info', 'info message');
console.error('error', 'error message');
console.warn('warn', 'warn message');

// obj
var obj = {
    name: 'IU',
    job: 'singer'
};
console.log('obj: ', obj);
// custom console
// using requre, create module.
// var Console = require('console').Console;
// create console obj (takes 2 param 1: standard output and stderr // 1 2)
// new Console(stdout, [stderr]);
// create file that state log
// var ouput = fs.createWriteStream('./stdout.log');
// var errorOutput = fs.createWriteStream('./stderr.log');
// var logger = new Console(output, errorOutput)


// create time checker
console.time('SUM_TIME');
let sum = 0;
for (let i = 0; i < 10000; i++) {
    sum += i;
}
console.timeEnd('SUM_TIME');

var fs = require('fs');
var output = fs.createWriteStream('./stdout.log');
var errorOutput = fs.createWriteStream('./stderr.log');
var Console = require('console').Console;
var logger = new Console(output, errorOutput);

// for stdout log
logger.log('log message');
logger.info('info message');

// for stderr log
logger.warn('warn message');
logger.error('error message');


// check run time
console.time('TIMER');
let summation = 0;
for (let i = 0; i < 10000; i++) {
    summation += i;
}
console.log(summation);
console.timeEnd('TIMER');