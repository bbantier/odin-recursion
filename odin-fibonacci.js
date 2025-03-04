const fibs = (n) => {
  const sequence = [];

  for (let i = 1; i <= n; i++) {
    sequence.push(
      sequence.length === 0
        ? 0
        : sequence.length === 1
          ? 1
          : sequence[i - 3] + sequence[i - 2],
    );
  }
  return sequence;
};

console.log(fibs(8));


const fibsRec = (n) => {
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const sequence = fibsRec(n - 1);
  return [...sequence, sequence[n - 2] + sequence[n - 3]];
}

console.log(fibsRec(8));
