function appendNumber(number) {
    document.calc.display.value += number;
  }
  
  function appendOperator(operator) {
    document.calc.display.value += ' ' + operator + ' ';
  }
  
  function clearDisplay() {
    document.calc.display.value = '';
  }
  
  function calculate() {
    try {
      document.calc.display.value = eval(document.calc.display.value);
    } catch (e) {
      document.calc.display.value = 'Error';
    }
  }
  