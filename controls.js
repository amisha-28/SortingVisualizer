function start() {
    var currentAlgo = alogoSelect.options[alogoSelect.selectedIndex].value;
    if(currentAlgo == "bubble") {
        bubbleSort();
    } else if(currentAlgo == "insertion") {
        insertionSort();
    } else if(currentAlgo == "selection") {
        selectionSort();
    }
}

function reset() {
    createBars(arraySize);
}

function changeSort() {
    setTitle();
    reset();
}


function changeInputSize() {
    arraySize = inputSize.value;
    createBars(arraySize);
}

function changeDelayTime() {
    delayInMs = delayInput.value;
    setDelay();
}

function changeOrder() {
    reset();
}
