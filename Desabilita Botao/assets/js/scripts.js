var currentNumber = 0;

var currentNumberwapper = document.getElementById('currentNumber');


function increment() {
    if (currentNumber < 10) {
        currentNumber = currentNumber + 1;
        currentNumberwapper.innerHTML = currentNumber;
    }
}

function decrement() {
    if (currentNumber > 0) {
        currentNumber = currentNumber - 1;
        currentNumberwapper.innerHTML = currentNumber;
    }
}
