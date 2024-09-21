console.log('Start');

setTimeout(() => {
  console.log('setTimeout callback');
}, 5000);

// Simulate a long-running task
for (let i = 0; i < 1e9; i++) {}

console.log('End');