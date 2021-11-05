for (let i = 0; i < 5; i++) {
  const timer = setTimeout(() => console.log('tick'), 0);
  timer.unref();
}