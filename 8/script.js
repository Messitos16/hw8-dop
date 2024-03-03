document.addEventListener("DOMContentLoaded", function() {
    let countElement = document.getElementById('count');
    let timeElement = document.getElementById('time');
    let btn = document.getElementById('btn');
    let countPerSecondElement = document.getElementById('count-per-second');
    let restartBtn = document.getElementById('restart');
    let bestCountElement = document.getElementById('best-count');

    let count = 0;
    let timeValue = 10;
    let interval;
    let timeout;
    let bestCount = 0;

    timeElement.addEventListener('input', function(e) {
        let newValue = parseInt(e.target.value);
        if (newValue < 5) {
            timeValue = 5;
            timeElement.value = 5;
        } else if (newValue > 15) {
            timeValue = 15;
            timeElement.value = 15;
        } else {
            timeValue = newValue;
        }
    });

    btn.addEventListener('click', function() {
        if (count === 0) {
            timeElement.disabled = true;
            timeout = setTimeout(() => {
                clearInterval(interval);
                btn.disabled = true;
                countPerSecondElement.textContent = (count / timeValue).toFixed(2);

                if (count > bestCount) {
                    bestCount = count;
                    bestCountElement.textContent = bestCount;
                }
            }, timeValue * 1000);
            count++;
            countElement.textContent = count;
            interval = setInterval(() => {
                timeValue--;
                timeElement.value = timeValue;
            }, 1000);
        } else {
            count++;
            countElement.textContent = count;
        }
    });

    restartBtn.addEventListener('click', function() {
        clearInterval(interval);
        clearTimeout(timeout);
        count = 0;
        timeValue = 10;
        btn.disabled = false;
        countElement.textContent = 0;
        timeElement.value = 10;
        countPerSecondElement.textContent = 0;
        timeElement.disabled = false;
    });
});