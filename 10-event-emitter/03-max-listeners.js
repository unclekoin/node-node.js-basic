const emitter = require('events');

class MyEmitter extends emitter {}

const myEmitter = new MyEmitter();

myEmitter.setMaxListeners(5);
console.log(myEmitter.getMaxListeners()); // 5

const func1 = () => console.log('function 1');
const func2 = () => console.log('function 2');
const func3 = () => console.log('function 3');
const func4 = () => console.log('function 4');
const func5 = () => console.log('function 5');
const func6 = () => console.log('function 6');

myEmitter.on('event', func1);
myEmitter.on('event', func1);
myEmitter.on('event', func2);
myEmitter.on('event', func2);
myEmitter.on('event', func3);
myEmitter.on('event', func4);
myEmitter.on('event', func5);
myEmitter.on('event', func6);

myEmitter.emit('event');
