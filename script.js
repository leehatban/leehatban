// 계산기 입력값
let inputVal = '';

// 입력값에 숫자 추가
function inputNum(num) {
  inputVal += num;
  document.getElementById('result').value = inputVal;
}

// 입력값에 연산자 추가
function inputOperator(operator) {
  inputVal += operator;
  document.getElementById('result').value = inputVal;
}

// 입력값 초기화
function clearInput() {
  inputVal = '';
  document.getElementById('result').value = inputVal;
}

// 계산 결과 반환
function calculate() {
  let result = eval(inputVal);
  document.getElementById('result').value = result;
  inputVal = '';
}
