var timer = 20;
var score = 0;
var hitrn = 0;


function increaseScore() {
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}
function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
function makebubble() {

    var clutter = '';

    for (i = 1; i <= 168; i++) {
        var rn = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#panelbtm").innerHTML = clutter;
}

function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;

        } else {
            clearInterval(timerint);
            document.querySelector("#panelbtm").innerHTML = `<h1>Game Over Your Score is ${score}</h1>`
        }

    }, 1000);
}

document.querySelector("#panelbtm").addEventListener("click",
    function (dets) {
        var clickedNum = (Number(dets.target.textContent));
        if (clickedNum === hitrn) {
            increaseScore();
            makebubble();
            getnewhit();

        }

    });
getnewhit()
runtimer()
makebubble()