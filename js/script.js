let ax = document.getElementById('ax');
let bx = document.getElementById('bx');
let cx = document.getElementById('cx');
let dx = document.getElementById('dx');

const randomBtn = document.getElementById('randomBtn');
const moveBtn = document.getElementById('moveBtn');
const xchgBtn = document.getElementById('xchgBtn');
const resetBtn = document.getElementById('resetBtn');
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
xchgBtn.addEventListener('click', xchgValue);
resetBtn.addEventListener('click', resetAll);

function resetAll() {
	ax.value = '0000';
	bx.value = '0000';
	cx.value = '0000';
	dx.value = '0000';
}

function xchgValue() {
	if (axRadioFirst.checked && bxRadioSecond.checked) {
		let temp = bx.value;
		bx.value = ax.value;
		ax.value = temp;
	} else if (axRadioFirst.checked && cxRadioSecond.checked) {
		let temp = cx.value;
		cx.value = ax.value;
		ax.value = temp;
	} else if (axRadioFirst.checked && dxRadioSecond.checked) {
		let temp = dx.value;
		dx.value = ax.value;
		ax.value = temp;
	} else if (bxRadioFirst.checked && axRadioSecond.checked) {
		let temp = ax.value;
		ax.value = bx.value;
		bx.value = temp;
	} else if (bxRadioFirst.checked && cxRadioSecond.checked) {
		let temp = cx.value;
		cx.value = bx.value;
		bx.value = temp;
	} else if (bxRadioFirst.checked && dxRadioSecond.checked) {
		let temp = dx.value;
		dx.value = bx.value;
		bx.value = temp;
	} else if (cxRadioFirst.checked && axRadioSecond.checked) {
		let temp = ax.value;
		ax.value = cx.value;
		cx.value = temp;
	} else if (cxRadioFirst.checked && bxRadioSecond.checked) {
		let temp = bx.value;
		bx.value = cx.value;
		cx.value = temp;
	} else if (cxRadioFirst.checked && dxRadioSecond.checked) {
		let temp = dx.value;
		dx.value = cx.value;
		cx.value = temp;
	} else if (dxRadioFirst.checked && axRadioSecond.checked) {
		let temp = ax.value;
		ax.value = dx.value;
		dx.value = temp;
	} else if (dxRadioFirst.checked && bxRadioSecond.checked) {
		let temp = bx.value;
		bx.value = dx.value;
		dx.value = temp;
	} else if (dxRadioFirst.checked && cxRadioSecond.checked) {
		let temp = cx.value;
		cx.value = dx.value;
		dx.value = temp;
	}
}

function moveValue() {
	// ax.value;
	// bx.value;
	// cx.value;
	// dx.value;

	if (axRadioFirst.checked && bxRadioSecond.checked) {
		bx.value = ax.value;
	} else if (axRadioFirst.checked && cxRadioSecond.checked) {
		cx.value = ax.value;
	} else if (axRadioFirst.checked && dxRadioSecond.checked) {
		dx.value = ax.value;
	} else if (bxRadioFirst.checked && axRadioSecond.checked) {
		ax.value = bx.value;
	} else if (bxRadioFirst.checked && cxRadioSecond.checked) {
		cx.value = bx.value;
	} else if (bxRadioFirst.checked && dxRadioSecond.checked) {
		dx.value = bx.value;
	} else if (cxRadioFirst.checked && axRadioSecond.checked) {
		ax.value = cx.value;
	} else if (cxRadioFirst.checked && bxRadioSecond.checked) {
		bx.value = cx.value;
	} else if (cxRadioFirst.checked && dxRadioSecond.checked) {
		dx.value = cx.value;
	} else if (dxRadioFirst.checked && axRadioSecond.checked) {
		ax.value = dx.value;
	} else if (dxRadioFirst.checked && bxRadioSecond.checked) {
		bx.value = dx.value;
	} else if (dxRadioFirst.checked && cxRadioSecond.checked) {
		cx.value = dx.value;
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
