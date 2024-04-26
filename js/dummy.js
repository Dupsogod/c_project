function squareNumber(n) {
  return n * n;
}

console.log(squareNumber(typeof window !== 'undefined' ? window.parseInt(prompt("Enter a number to square:"), 10) : 10));