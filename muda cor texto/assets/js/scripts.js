var currentNumberwapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberwapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        document.getElementById('currentNumber').style.color = "#000000";
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberwapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        document.getElementById('currentNumber').style.color = "#FA2D01";
    }
}