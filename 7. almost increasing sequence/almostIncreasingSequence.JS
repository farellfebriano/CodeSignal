function solution(sequence) {
  // so we need to chek every iteration in i<i+1 if its false increase the count
  let count = 0;
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (
        sequence[i + 1] <= sequence[i - 1] &&
        sequence[i] <= sequence[i - 2]
      ) {
        return false;
      }
    }
  }
  return count <= 1;
}
