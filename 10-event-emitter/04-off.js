const emitter = require('events');

class MyEmitter extends emitter {}

const myEmitter = new MyEmitter();

const alerter = () => console.log('Event happened!');

myEmitter.on('event', alerter);
myEmitter.emit('event');
myEmitter.emit('event');

myEmitter.off('event', alerter);
myEmitter.emit('event');
