var results = [];

function messageHandler(e) {
  if (e.data > 0) {
    generateFibonacci(e.data);
  }
}

function generateFibonacci(limit) {
  results.length = 0;
  for (i = 0; i < limit; i++) {
    results.push(generateNextNumber(i));
  }
  postMessage(results);
}

function generateNextNumber(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return generateNextNumber(n - 1) + generateNextNumber(n - 2);
}

addEventListener("message", messageHandler, true);