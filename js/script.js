let ax = document.getElementById('ax');
let bx = document.getElementById('bx');
let cx = document.getElementById('cx');
let dx = document.getElementById('dx');

const randomBtn = document.getElementById('randomBtn');
const moveBtn = document.getElementById('moveBtn');
const axRadioFirst = document.getElementById('axRadioFirst');
const bxRadioFirst = document.getElementById('bxRadioFirst');
const cxRadioFirst = document.getElementById('cxRadioFirst');
const dxRadioFirst = document.getElementById('dxRadioFirst');
const axRadioSecond = document.getElementById('axRadioSecond');
const bxRadioSecond = document.getElementById('bxRadioSecond');
const cxRadioSecond = document.getElementById('cxRadioSecond');
const dxRadioSecond = document.getElementById('dxRadioSecond');

randomBtn.addEventListener('click', randomHex);
moveBtn.addEventListener('click', moveValue);

function moveValue() {
	ax.value;
	bx.value;
	cx.value;
	dx.value;

	if (axRadioFirst.checked && bxRadioSecond.checked) {
		bx.value = ax.value;
	} else if (axRadioFirst.checked && cxRadioSecond.checked) {
		cx.value = ax.value;
	} else if (axRadioFirst.checked && dxRadioSecond.checked) {
		dx.value = ax.value;
	}
}

function randomHex() {
	let val1 = Math.floor(Math.random() * 65536)
		.toString(16)
		.padStart(4, '0')
		.toUpperCase();
	let val2 = Math.floor(Math.random() * 65536)
		.toString(16)
		.padStart(4, '0')
		.toUpperCase();
	let val3 = Math.floor(Math.random() * 65536)
		.toString(16)
		.padStart(4, '0')
		.toUpperCase();
	let val4 = Math.floor(Math.random() * 65536)
		.toString(16)
		.padStart(4, '0')
		.toUpperCase();

	ax.value = val1;
	bx.value = val2;
	cx.value = val3;
	dx.value = val4;
}
