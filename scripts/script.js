let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
displayResult(calculation);

function updateCalculation(button) {
  if (button === '=') {
    try {
      calculation = String(eval(calculation) || '');
    } catch (error) {
      calculation = 'Error';
    }
    displayResult(calculation);
  } else if (button === 'clear') {
    calculation = '';
    displayResult(calculation);
  } else if (button === 'delete') {
    deleteLastCharacter();
    return;
  } else {
    if (calculation === 'Error') {
      calculation = '';
    }
    calculation += button;
    displayResult(calculation);
  }

  localStorage.setItem('calculation', JSON.stringify(calculation));
}

function deleteLastCharacter() {
  if (calculation === 'Error') {
    calculation = '';
  } else {
    // Trim space if ending with spaced operators like ' + '
    calculation = calculation.trimEnd();
    calculation = calculation.slice(0, -1).trimEnd();
  }
  
  displayResult(calculation);
  localStorage.setItem('calculation', JSON.stringify(calculation));
}

window.addEventListener('keydown', (event) => {
  const key = event.key;

  if (key >= '0' && key <= '9') {
    updateCalculation(key);
  } else if (key === '.') {
    updateCalculation('.');
  } else if (key === '+') {
    updateCalculation(' + ');
  } else if (key === '-') {
    updateCalculation(' - ');
  } else if (key === '*') {
    updateCalculation(' * ');
  } else if (key === '/') {
    event.preventDefault(); // Prevents quick search shortcut in Firefox
    updateCalculation(' / ');
  } else if (key === 'Enter' || key === '=') {
    event.preventDefault(); // Prevents triggering currently focused buttons
    updateCalculation('=');
  } else if (key === 'Backspace') {
    deleteLastCharacter();
  } else if (key === 'Escape' || key.toLowerCase() === 'c') {
    updateCalculation('clear');
  }
});

function displayResult(calculation) {
  document.querySelector('.js-cal-result').innerHTML = calculation || '0';
}