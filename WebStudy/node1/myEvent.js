// exit event
process.on('exit', function(code){
    console.log("Exit Event Occur", code);
});

process.once('exit', function(code) {
    console.log("Exit event with once", code)
});

// forcely occur event by using emit
// which send to on and once
// note that once only occur once
process.emit('exit');
process.emit('exit', 0);
process.emit('exit', 1);

process.on('uncaughtException', function(code) {
    console.log('uncaughtException');
});
sayHello();

