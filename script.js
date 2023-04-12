// 계산기 결과창 가져오기
let result = document.getElementById('result');

// 입력된 값을 결과창에 추가하는 함수
function insertValue(value) {
  result.value += value;
}

// 결과창 초기화 함수
function clearResult() {
  result.value = '';
}

// 입력된 값의 마지막 문자를 삭제하는 함수
function backspace() {
  result.value = result.value.slice(0, -1);
}

// 계산을 수행하는 함수
function calculate() {
  try {
    // 입력된 수식 계산
    result.value = eval(result.value);
  } catch (error) {
    // 계산 중 에러 발생 시 에러 메시지 출력
    result.value = 'Error';
  }
}
