// const cButt = document.querySelector('#cButt');
// const butt7 = document.querySelector('#butt7');
// const butt8 = document.querySelector('#butt8');
// const butt9 = document.querySelector('#butt9');
// const divButt = document.querySelector('#divButt');
// const butt4 = document.querySelector('#butt4');
// const butt5 = document.querySelector('#butt5');
// const butt6 = document.querySelector('#butt6');
// const minButt = document.querySelector('#minButt');
// const multButt = document.querySelector('#multButt');
// const butt1 = document.querySelector('#butt1');
// const butt2 = document.querySelector('#butt2');
// const butt3 = document.querySelector('#butt3');
// const addButt = document.querySelector('#addButt');
// const butt0 = document.querySelector('#butt0');
// const deciButt = document.querySelector('#deciButt');
// const equaButt = document.querySelector('#equaButt');

const invertSign = document.querySelector('.invertSign');
const enter = document.querySelector('.enter');
const allClear = document.querySelector('.allClear');
const clear = document.querySelector('.clear');
const display = document.querySelector('#outputWindow');
const numbersAndOps = document.querySelectorAll('.math');
let disMath = '';

for (let digit of numbersAndOps) {
	digit.addEventListener('click', function(event) {
		display.innerText += digit.innerText;
		disMath += digit.innerText;
	});
}

allClear.addEventListener('click', function(event) {
	display.innerText = '';
	disMath = '';
});

// NOT WORKING
// clear.addEventListener('click', function(event) {
// 	display = display.substring(0, display.length - 1);
// 	disMath = disMath.slice(0, -1);
// });

enter.addEventListener('click', function(event) {
	let answer = eval(disMath);
	display.textContent = answer;
});

// invertSign.addEventListener('click', function(event) {
//     Math.abs
// })

// butt7.addEventListener('click', function(event) {
// 	const newNumber = document.createElement('p');
// 	newNumber.innerText = '7';
// 	console.log(newNumber);
// });
