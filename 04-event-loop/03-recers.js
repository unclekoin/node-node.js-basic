const racer1 = () => {
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immidiate'));
  process.nextTick(() => console.log('nextTick'));
};

const racer2 = () => {
  process.nextTick(() => console.log('nextTick'));
  setTimeout(() => console.log('timeout'), 0);
  setImmediate(() => console.log('immidiate'));
};

const racer3 = () => {
  setImmediate(() => console.log('immidiate'));
  process.nextTick(() => console.log('nextTick'));
  setTimeout(() => console.log('timeout'), 0);
};

racer1();
racer2();
racer3();
