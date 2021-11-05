const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
const alert = () => console.log('Event happened!');
const oneMore = () => console.log('One more!');

myEmitter.once('event', alert);
myEmitter.on('oneMore', oneMore);

myEmitter.emit('event');
myEmitter.emit('oneMore');
myEmitter.emit('event');
myEmitter.emit('event');
