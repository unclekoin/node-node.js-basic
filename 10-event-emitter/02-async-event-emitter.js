const emitter = require('events');

class MyEmitter extends emitter {}

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
  setImmediate(() => {
    console.log('This happens asynchronously', a, b);
  });
});

myEmitter.on('event', (a, b) => {
  process.nextTick(() => {
    console.log('This happens nextTick', a, b);
  });
});

myEmitter.on('event', (a, b) =>
  console.log('This happens synchronously', a, b)
);

myEmitter.emit('event', 37, 45);
