let ax = document.getElementById('ax');
let bx = document.getElementById('bx');
let cx = document.getElementById('cx');
let dx = document.getElementById('dx');

const randomBtn = document.getElementById('randomBtn');
const moveBtn = document.getElementById('moveBtn');

randomBtn.addEventListener('click', randomHex);
moveBtn.addEventListener('click', moveValue);

function moveValue() {}

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
