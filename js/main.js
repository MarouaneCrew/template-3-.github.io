let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / 1000 / 60 / 60 /24);
    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / 1000 / 60 / 60);
    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / 1000 / 60);
    let seconds = Math.floor(dateDiff % (1000 * 60) / 1000 );
    document.querySelector(".events .box:nth-of-type(1) h3").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".events .box:nth-of-type(2) h3").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .box:nth-of-type(3) h3").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".events .box:nth-of-type(4) h3").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
    if (dateDiff <= 0) {
        clearInterval(counter);
    }
}, 1000)

let section = document.querySelector(".our-skills");
let progressSpan = document.querySelectorAll(".skill .progress span");

window.onscroll = function () {
    if (window.scrollY >= 7280 && window.scrollY <= 8130) {
        progressSpan.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
    else {
        progressSpan.forEach((span) => {
            span.style.width = 0;
        });
    };
};

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

document.onscroll = function scroll() {
    if (window.scrollY >= 11810 && window.scrollY <= 12700) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        };
        started = true;
    };
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        };
    },2000 / goal);
};

// document.onscroll = () => {
//     console.log("reached");
//     return false;
// };
