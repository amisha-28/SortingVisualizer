function insert(num1, num2) {
    sortingView.insertBefore(num2, num1);
}

async function insertionSort() {
    var bar = document.querySelectorAll(".bar");
    for (var i = 1; i < bar.length; i++) {
        var key = Number(bar[i].childNodes[0].innerHTML);
        var j = i - 1;
        while(j >= 0 && Number(bar[j].childNodes[0].innerHTML > key)) {
            bar[j].style.backgroundColor = "crimson";
            bar[j + 1].style.backgroundColor = "crimson";
            bar[j].style.transform = "translate(0, -5px)";
            bar[j+1].style.transform = "translate(0, -5px)";
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, delayInMs)
            );
            insert(bar[j], bar[j + 1]);
            bar[j].style.transform = "translate(0,0)";
            bar[j+1].style.transform = "translate(0,0)";
            bar[j].style.backgroundColor = "pink";
            bar[j + 1].style.backgroundColor = "pink";
            j = j - 1;
            bar = document.querySelectorAll(".bar");
        }

    }
}
