let ax = document.getElementById('ax');
let bx = document.getElementById('bx');
let cx = document.getElementById('cx');
let dx = document.getElementById('dx');

let sp = document.getElementById('sp');
let bp = document.getElementById('bp');
let di = document.getElementById('di');
let si = document.getElementById('si');
let offs = document.getElementById('offs');

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
	sp.value = '0000';
	bp.value = '0000';
	di.value = '0000';
	si.value = '0000';
	offs.value = '0000';
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
	let val5 = Math.floor(Math.random() * 65536)
		.toString(16)
		.padStart(4, '0')
		.toUpperCase();
	let val6 = Math.floor(Math.random() * 65536)
		.toString(16)
		.padStart(4, '0')
		.toUpperCase();
	let val7 = Math.floor(Math.random() * 65536)
		.toString(16)
		.padStart(4, '0')
		.toUpperCase();
	let val8 = Math.floor(Math.random() * 65536)
		.toString(16)
		.padStart(4, '0')
		.toUpperCase();

	ax.value = val1;
	bx.value = val2;
	cx.value = val3;
	dx.value = val4;
	bp.value = val5;
	di.value = val6;
	si.value = val7;
	offs.value = val8;
}

// --------------------  disabling buttons  ----------------------------

const adressingMode = document.getElementById('adressingMode');

adressingMode.addEventListener('change', disablingButtons);

function disablingButtons() {
	if (this.value === 'base') {
		document.getElementById('siAdress').disabled = true;
		document.getElementById('diAdress').disabled = true;
		document.getElementById('bxAdress').disabled = false;
		document.getElementById('bpAdress').disabled = false;

		document.getElementById('sibx').disabled = true;
		document.getElementById('sibp').disabled = true;
		document.getElementById('dibx').disabled = true;
		document.getElementById('dibp').disabled = true;
	} else if (this.value === 'index') {
		document.getElementById('siAdress').disabled = false;
		document.getElementById('diAdress').disabled = false;
		document.getElementById('bxAdress').disabled = true;
		document.getElementById('bpAdress').disabled = true;

		document.getElementById('sibx').disabled = true;
		document.getElementById('sibp').disabled = true;
		document.getElementById('dibx').disabled = true;
		document.getElementById('dibp').disabled = true;
	} else if (this.value === 'index-base') {
		document.getElementById('siAdress').disabled = true;
		document.getElementById('diAdress').disabled = true;
		document.getElementById('bxAdress').disabled = true;
		document.getElementById('bpAdress').disabled = true;

		document.getElementById('sibx').disabled = false;
		document.getElementById('sibp').disabled = false;
		document.getElementById('dibx').disabled = false;
		document.getElementById('dibp').disabled = false;
	}
}

//----------------------------------------

const fromMemoryRadio = document.getElementById('fromMemory');
const fromRegisterRadio = document.getElementById('fromRegister');

adressingMode;

const siRadio = document.getElementById('siAdress');
const diRadio = document.getElementById('diAdress');
const bxRadio = document.getElementById('bxAdress');
const bpRadio = document.getElementById('bpAdress');

const sibx = document.getElementById('sibx');
const sibp = document.getElementById('sibp');
const dibx = document.getElementById('dibx');
const dibp = document.getElementById('dibp');

const chosenRegister = document.getElementById('choseRegister');

const movAdressing = document.getElementById('movAdressing');

// Sposób zapisu

let selectedSaveMode = '';
let whereAdressInputs = document.querySelectorAll('input[name="whereAdress"]');

for (let input of whereAdressInputs) {
	input.addEventListener('change', () => {
		if (input.checked) {
			selectedSaveMode = input.id;
		}
	});
}

// Tryb adresowania

let selectedAdressingMode = '';
let adressingModeSelect = document.getElementById('adressingMode');

adressingModeSelect.addEventListener('change', () => {
	selectedAdressingMode = adressingModeSelect.value;
});

// Rejestry Radio

let selectedRegister = '';
let registersRadio = document.querySelectorAll('input[name="registerAdress"]');

for (let input of registersRadio) {
	input.addEventListener('change', () => {
		if (input.checked) {
			selectedRegister = input.id;
		}
	});
}

// Rejestry Bazowo-Indeksowe

let selectedIndexBaseRegister = '';
let indexBaseAdresses = document.querySelectorAll(
	'input[name="indexBaseAdress"]'
);

for (let input of indexBaseAdresses) {
	input.addEventListener('change', () => {
		if (input.checked) {
			selectedIndexBaseRegister = input.id;
		}
	});
}

// Rejestry Select

let selectedRegisterSelect = '';
let registersSelect = document.getElementById('choseRegister');

registersSelect.addEventListener('change', () => {
	selectedRegisterSelect = registersSelect.value;
});

// Adresowanie

const resultParagraph = document.getElementById('result');

let memory = new Array(65536);

movAdressing.addEventListener('click', () => {
	// alert(selectedSaveMode);
	// alert(selectedAdressingMode);
	// alert(selectedRegister);
	// alert(selectedIndexBaseRegister);
	// alert(selectedRegisterSelect);

	if (selectedSaveMode == 'fromMemory') {
		if (selectedRegister == 'siAdress') {
			if (selectedRegisterSelect == 'regAX') {
				let hex1 = si.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = ax.value;
			} else if (selectedRegisterSelect == 'regBX') {
				let hex1 = si.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = ax.value;
			} else if (selectedRegisterSelect == 'regCX') {
				let hex1 = si.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = cx.value;
			} else if (selectedRegisterSelect == 'regDX') {
				let hex1 = si.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = dx.value;
			}
		} else if (selectedRegister == 'diAdress') {
			if (selectedRegisterSelect == 'regAX') {
				let hex1 = di.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = ax.value;
			} else if (selectedRegisterSelect == 'regBX') {
				let hex1 = di.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = bx.value;
			} else if (selectedRegisterSelect == 'regCX') {
				let hex1 = di.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = cx.value;
			} else if (selectedRegisterSelect == 'regDX') {
				let hex1 = di.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = dx.value;
			}
		} else if (selectedRegister == 'bxAdress') {
			if (selectedRegisterSelect == 'regAX') {
				let hex1 = bx.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = ax.value;
			} else if (selectedRegisterSelect == 'regBX') {
				let hex1 = bx.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = bx.value;
			} else if (selectedRegisterSelect == 'regCX') {
				let hex1 = bx.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = cx.value;
			} else if (selectedRegisterSelect == 'regDX') {
				let hex1 = bx.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = dx.value;
			}
		} else if (selectedRegister == 'bpAdress') {
			if (selectedRegisterSelect == 'regAX') {
				let hex1 = bp.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = ax.value;
			} else if (selectedRegisterSelect == 'regBX') {
				let hex1 = bp.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = bx.value;
			} else if (selectedRegisterSelect == 'regCX') {
				let hex1 = bp.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = cx.value;
			} else if (selectedRegisterSelect == 'regDX') {
				let hex1 = bp.value;
				let hex2 = offs.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);

				let sum = decimal1 + decimal2;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = dx.value;
			}
		} // Index Base Registers
		else if (selectedIndexBaseRegister == 'sibx') {
			if (selectedRegisterSelect == 'regAX') {
				let hex1 = si.value;
				let hex2 = offs.value;
				let hex3 = bx.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = ax.value;
			} else if (selectedRegisterSelect == 'regBX') {
				let hex1 = si.value;
				let hex2 = offs.value;
				let hex3 = bx.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = bx.value;
			} else if (selectedRegisterSelect == 'regCX') {
				let hex1 = si.value;
				let hex2 = offs.value;
				let hex3 = bx.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = cx.value;
			} else if (selectedRegisterSelect == 'regDX') {
				let hex1 = si.value;
				let hex2 = offs.value;
				let hex3 = bx.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = dx.value;
			}
		} else if (selectedIndexBaseRegister == 'sibp') {
			if (selectedRegisterSelect == 'regAX') {
				let hex1 = si.value;
				let hex2 = offs.value;
				let hex3 = bp.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = ax.value;
			} else if (selectedRegisterSelect == 'regBX') {
				let hex1 = si.value;
				let hex2 = offs.value;
				let hex3 = bp.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = bx.value;
			} else if (selectedRegisterSelect == 'regCX') {
				let hex1 = si.value;
				let hex2 = offs.value;
				let hex3 = bp.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = cx.value;
			} else if (selectedRegisterSelect == 'regDX') {
				let hex1 = si.value;
				let hex2 = offs.value;
				let hex3 = bp.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = dx.value;
			}
		} else if (selectedIndexBaseRegister == 'dibx') {
			if (selectedRegisterSelect == 'regAX') {
				let hex1 = di.value;
				let hex2 = offs.value;
				let hex3 = bx.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = ax.value;
			} else if (selectedRegisterSelect == 'regBX') {
				let hex1 = di.value;
				let hex2 = offs.value;
				let hex3 = bx.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = bx.value;
			} else if (selectedRegisterSelect == 'regCX') {
				let hex1 = di.value;
				let hex2 = offs.value;
				let hex3 = bx.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = cx.value;
			} else if (selectedRegisterSelect == 'regDX') {
				let hex1 = di.value;
				let hex2 = offs.value;
				let hex3 = bx.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = dx.value;
			}
		} else if (selectedIndexBaseRegister == 'dibp') {
			if (selectedRegisterSelect == 'regAX') {
				let hex1 = di.value;
				let hex2 = offs.value;
				let hex3 = bp.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = ax.value;
			} else if (selectedRegisterSelect == 'regBX') {
				let hex1 = di.value;
				let hex2 = offs.value;
				let hex3 = bp.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = bx.value;
			} else if (selectedRegisterSelect == 'regCX') {
				let hex1 = di.value;
				let hex2 = offs.value;
				let hex3 = bp.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = cx.value;
			} else if (selectedRegisterSelect == 'regDX') {
				let hex1 = di.value;
				let hex2 = offs.value;
				let hex3 = bp.value;

				let decimal1 = parseInt(hex1, 16);
				let decimal2 = parseInt(hex2, 16);
				let decimal3 = parseInt(hex3, 16);

				let sum = decimal1 + decimal2 + decimal3;

				resultParagraph.innerHTML = `Adres komórki pamięci: ${sum}`;
				let sumDecimal = sum.toString(16);
				memory[sumDecimal] = dx.value;
			}
		}
	}
	// else if(selectedSaveMode == 'fromRegister'){
	//     if (selectedRegister == 'siAdress') {
	// 		if (selectedRegisterSelect == 'regAX') {

	// 		}else if(selectedRegisterSelect == 'regBX'){

	//         }else if(selectedRegisterSelect == 'regCX'){

	//         }else if(selectedRegisterSelect == 'regDX'){

	//         }
	// 	} else if (selectedRegister == 'diAdress') {
	//         if (selectedRegisterSelect == 'regAX') {

	// 		}else if(selectedRegisterSelect == 'regBX'){

	//         }else if(selectedRegisterSelect == 'regCX'){

	//         }else if(selectedRegisterSelect == 'regDX'){

	//         }
	// 	} else if (selectedRegister == 'bxAdress') {
	//         if (selectedRegisterSelect == 'regAX') {

	// 		}else if(selectedRegisterSelect == 'regBX'){

	//         }else if(selectedRegisterSelect == 'regCX'){

	//         }else if(selectedRegisterSelect == 'regDX'){

	//         }
	// 	} else if (selectedRegister == 'bpAdress') {
	//         if (selectedRegisterSelect == 'regAX') {

	// 		}else if(selectedRegisterSelect == 'regBX'){

	//         }else if(selectedRegisterSelect == 'regCX'){

	//         }else if(selectedRegisterSelect == 'regDX'){

	//         }
	// 	} // Index Base Registers
	//     else if (selectedIndexBaseRegister == 'sibx') {
	//         if (selectedRegisterSelect == 'regAX') {

	// 		}else if(selectedRegisterSelect == 'regBX'){

	//         }else if(selectedRegisterSelect == 'regCX'){

	//         }else if(selectedRegisterSelect == 'regDX'){

	//         }
	// 	} else if (selectedIndexBaseRegister == 'sibp') {
	//         if (selectedRegisterSelect == 'regAX') {

	// 		}else if(selectedRegisterSelect == 'regBX'){

	//         }else if(selectedRegisterSelect == 'regCX'){

	//         }else if(selectedRegisterSelect == 'regDX'){

	//         }
	// 	} else if (selectedIndexBaseRegister == 'dibx') {
	//         if (selectedRegisterSelect == 'regAX') {

	// 		}else if(selectedRegisterSelect == 'regBX'){

	//         }else if(selectedRegisterSelect == 'regCX'){

	//         }else if(selectedRegisterSelect == 'regDX'){

	//         }
	// 	} else if (selectedIndexBaseRegister == 'dibp') {
	//         if (selectedRegisterSelect == 'regAX') {

	// 		}else if(selectedRegisterSelect == 'regBX'){

	//         }else if(selectedRegisterSelect == 'regCX'){

	//         }else if(selectedRegisterSelect == 'regDX'){

	//         }
	// 	}
	// }
});
