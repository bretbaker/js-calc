let power = false;

document.getElementById('power-btn').addEventListener('click', () => {
  if (!power) {
    document.getElementById('calc-text').innerHTML = '0';
    power = true;
  } else if (power) {
    document.getElementById('calc-text').innerHTML = '';
    power = false;
  }
});
