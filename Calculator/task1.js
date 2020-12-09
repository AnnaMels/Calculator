function calcSum() {
    const a = parseInt(document.getElementById('number1').value);
    const b = parseInt(document.getElementById('number2').value);

    if (isNaN(a) === true) {
        a = 0;
    }

    if (isNaN(b) === true) {
        b = 0;
    }
    const c = a + b;
    document.getElementById("result").value = c
}


function calcDifference() {
    const a = parseInt(document.getElementById('number1').value);
    const b = parseInt(document.getElementById('number2').value);

    if (isNaN(a) === true) {
        a = 0;
    }

    if (isNaN(b) === true) {
        b = 0;
    }
    const c = a - b;
    document.getElementById("result").value = c
}


function calcMult() {
    const a = parseInt(document.getElementById('number1').value);
    const b = parseInt(document.getElementById('number2').value);

    if (isNaN(a) === true) {
        a = 0;
    }

    if (isNaN(b) === true) {
        b = 0;
    }
    const c = a * b;
    document.getElementById("result").value = c
}


function divideTheNumber() {
    const a = parseInt(document.getElementById('number1').value);
    const b = parseInt(document.getElementById('number2').value);

    if (isNaN(a) === true) {
        a = 0;
    }

    if (isNaN(b) === true) {
        b = 0;
    }
    const c = a / b;
    document.getElementById("result").value = c;
}

