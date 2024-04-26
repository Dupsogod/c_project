function calculateSquare() {
  var number = document.getElementById('numberInput').value;
  var resultElement = document.getElementById('result');
  if (!IsNaN(Number(number))) {
    resultElement.innerHTML = 'Please enter a valid number.';
  } else {
    var square = Number(number) * Number(number);
    resultElement.innerHTML = 'Square is: ' + square;
  }
}
