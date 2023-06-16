let displayValue = '';

function appendValue(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = displayValue;
}

function calculate() {
  let result;
  try {
    result = eval(displayValue);
  } catch (error) {
    result = 'Error';
  }
  document.getElementById('display').value = result;
  displayValue = '';
}
