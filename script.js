const math = document.querySelector(".math");
const result = document.querySelector(".result");

math.innerHTML = 0;
result.innerHTML = 0;


function input(t) {
	if (math.innerHTML.length >= 15) {
		math.innerHTML = math.innerHTML.replace(math.innerHTML.charAt(0), '');
	}
	else if (math.innerHTML == 0) {
		math.innerHTML = t;
	}
	else {
		math.innerHTML += t;
	}
};

function operat(t) {
	let z = math.innerHTML.charAt(math.innerHTML.length - 1);
	if ((z === '+' || z === '-' || z === '*' || z === '/' || z === '%')) {
		math.innerHTML = math.innerHTML.replace(math.innerHTML.charAt(math.innerHTML.length - 1), '');
		math.innerHTML += t;
	}
	else {
		math.innerHTML += t;
	}
}

function r_result() {
	function resulti() {
		return new Function("", "return " + math.innerHTML);
	}

	result.innerHTML = resulti()().toFixed(2);
};

function clr() {
	math.innerHTML = 0;
	result.innerHTML = 0;
}