let power = false;
let calcText = document.getElementById('calc-text');

document.getElementById('power-btn').addEventListener('click', () => {
  if (!power) {
    calcText.innerHTML = '0';
    power = true;
  } else if (power) {
    calcText.innerHTML = '';
    power = false;
  }
});

let numBtnArr = document.getElementsByClassName('num-btn');
console.log(numBtnArr);

for (let i = 0; i < numBtnArr.length; i++) {
  numBtnArr[i].addEventListener('click', () => {
    if (power) {
      console.log(numBtnArr[i].innerHTML);
      if (calcText.innerHTML === '0') {
        calcText.innerHTML = numBtnArr[i].innerHTML;
      } else {
        calcText.innerHTML += numBtnArr[i].innerHTML;
      }
    }
  });
}

let oprBtnArr = document.getElementsByClassName('opr-btn');
let curCalc = document.getElementById('current-calc');
let opUsed = false;
let val1;
let opr;
let val2;
let result;
console.log(oprBtnArr);

for (let i = 0; i < oprBtnArr.length; i++) {
  oprBtnArr[i].addEventListener('click', () => {
    if (power && !opUsed) {
      console.log(oprBtnArr[i].innerHTML);
      val1 = parseFloat(calcText.innerHTML);
      opr = oprBtnArr[i].innerHTML;
      curCalc.innerHTML = `${val1} ${opr}`;
      calcText.innerHTML = '0';
      opUsed = true;
    }
  });
}

let equalBtn = document.getElementById('equal-btn');
equalBtn.addEventListener('click', () => {
  if (power && opUsed) {
    val2 = parseFloat(calcText.innerHTML);
    if (opr === '+') {
      result = val1 + val2;
    } else if (opr === '-') {
      result = val1 - val2;
    } else if (opr === '/') {
      result = val1 / val2;
    } else if (opr === '*') {
      result = val1 * val2;
    }
    curCalc.innerHTML = `${val1} ${opr} ${val2} = ${result}`;
    calcText.innerHTML = result;
    opUsed = false;
    val1 = false;
    opr = false;
    val2 = false;
    result = false;
  }
});

let clearBtn = document.getElementById('clear-btn');
clearBtn.addEventListener('click', () => {
  if (power) {
    calcText.innerHTML = '0';
    decUsed = false;
    opUsed = false;
    curCalc.innerHTML = '';
  }
});

let decimalBtn = document.getElementById('decimal-btn');
let decUsed = false;
decimalBtn.addEventListener('click', () => {
  if (power && !decUsed) {
    calcText.innerHTML += '.';
    decUsed = true;
  }
});
