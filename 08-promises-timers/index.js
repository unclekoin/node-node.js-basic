setImmediate(() => console.log('immediate 1'));
setImmediate(() => {
  console.log('immediate 2');
  Promise.resolve().then(() => console.log('promise resolve'));
});
setImmediate(() => console.log('immediate 3'));
setImmediate(() => console.log('immediate 4'));

console.log(typeof Promise)