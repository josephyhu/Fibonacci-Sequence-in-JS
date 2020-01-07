let n = parseInt(prompt("Enter a nonnegative integer."));

while (n < 0 || !Number.isInteger(n)) {
  n = parseInt(prompt("Enter a nonnegative integer."))
}

const fibonacci = n => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n-2) + fibonacci(n-1);
  }
}

const printSeq = () => {
  let seq = [];
  for (let i = 0; i <= n; i += 1) {
    seq.push(fibonacci(i));
  }
  document.querySelector('#fibonacci').innerHTML = seq.join(', ');
}

printSeq();
