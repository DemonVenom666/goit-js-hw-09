// function getRandomHexColor() {
//     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// const refs = {
//     startBtnChangeColor: document.querySelector('[data-start]'),
//     stopBtnColor: document.querySelector('[data-stop]'),
//     allBody: document.querySelector('body')
// };

// let onChangeColor = null;

// refs.startBtnChangeColor.addEventListener('click', changeColor);
// refs.stopBtnColor.addEventListener('click', stopChangeColor);
// refs.stopBtnColor.setAttribute('disabled', true);

// function changeColor() {
//     onChangeColor = setInterval(() => {
//         refs.allBody.style.backgroundColor = getRandomHexColor();
//         refs.startBtnChangeColor.setAttribute('disabled', true);
//         refs.stopBtnColor.removeAttribute('disabled', true);
//     }, 1000);

// };

// function stopChangeColor() {
//     clearInterval(onChangeColor);
//     refs.stopBtnColor.setAttribute('disabled', true);
//     refs.startBtnChangeColor.removeAttribute('disabled', true);
// };

const refs = {
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
};

let timerId = null;

refs.start.addEventListener('click', changeBodyColor);
refs.stop.addEventListener('click', stopChangeBodyColor);
refs.stop.setAttribute('disabled', true);

function changeBodyColor() {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
        refs.start.setAttribute('disabled', true);
        refs.stop.removeAttribute('disabled', true);
    }, 1000);
}

function stopChangeBodyColor() {
    clearInterval(timerId);
    refs.stop.setAttribute('disabled', true);
    refs.start.removeAttribute('disabled', true);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}