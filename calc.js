let num1 = '';
let num2 = '';
let operator = null;
let selectedOperator = null;

let result = document.getElementById('result');
let buttonNumber = document.querySelectorAll('.numberKey');
let buttonOperator = document.querySelectorAll('.buttonOperator');
let buttonEquel = document.getElementById('equel');
let buttonClear = document.getElementById('clear');
let buttonDelete = document.getElementById('delete');
let buttonMinus = document.getElementById('buttonMinus');

result.innerHTML = '';

for (let number of buttonNumber) {
	number.onclick = function () {
		if (result.innerHTML != 0 || result.innerHTML != '') {
			result.innerHTML += number.innerHTML;
		} else {
			result.innerHTML = number.innerHTML;
		}
		
	}
}

for (let op of buttonOperator) {
	op.onclick = function () {
		operator = op.id;

		switch (operator) {
			case 'buttonDivide':
				selectedOperator = '÷';
				break;

			case 'buttonMultiply':
				selectedOperator = '×';
				break;

			case 'buttonMinus':
				selectedOperator = '-';
				break;

			case 'buttonPlus':
				selectedOperator = '+';
				break;
		}
		result.innerHTML += selectedOperator;
	}
}

function clearNumbers() {
	result.innerHTML = '';
	let num1 = null;
	let num2 = null;
	let operator = null;
	let selectedOperator = null;
}

function deleteLastNumber() {
	let resultLength = result.innerHTML.length;
	if (resultLength === 1) {
		resultLength = '';
	} else {
		resultLength = result.innerHTML.slice(0, resultLength - 1);
	}
	result.innerHTML = resultLength;
}

function calc() {

	if (result.innerHTML.startsWith('-')) {
		result.innerHTML = result.innerHTML.slice(1);
		num1 = (`${- result.innerHTML.split(selectedOperator)[0]}`);
		num2 = result.innerHTML.split(selectedOperator)[1];

	}  else if(result.innerHTML.includes('--')){
			let posOfMinuses = result.innerHTML.indexOf('--');
			num1 = result.innerHTML.slice(0, posOfMinuses);
			num2 = result.innerHTML.slice(posOfMinuses+2);
			selectedOperator = '+';

	} else {
		num1 = result.innerHTML.split(selectedOperator)[0];
		num2 = result.innerHTML.split(selectedOperator)[1];
	}

	switch (selectedOperator) {
		case '-':
			result.innerHTML = num1 - num2;
			break;

		case '+':
			result.innerHTML = +num1 + +num2; 
			break;

		case '×':
			result.innerHTML = num1 * num2;
			break;

		case '÷':
			if (num2 == 0) {
				result.innerHTML = 'Error';
			} else {
				result.innerHTML = num1 / num2;

			}
			break;
		
	}
	if (result.innerHTML.length > 7) { result.innerHTML = result.innerHTML.slice(0, 7) }; //по-хорошему нужно будет тут округлить.
}


buttonClear.addEventListener('click', clearNumbers);
buttonDelete.addEventListener('click', deleteLastNumber);
buttonEquel.addEventListener('click', calc);




