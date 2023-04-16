function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
    startBtnChangeColor: document.querySelector('[data-start]'),
    stopBtnColor: document.querySelector('[data-stop]'),
    allBody: document.querySelector('body')
};

let onChangeColor = null;

refs.startBtnChangeColor.addEventListener('click', changeColor);
refs.stopBtnColor.addEventListener('click', stopChangeColor);
refs.stopBtnColor.setAttribute('disabled', true);

function changeColor() {
    onChangeColor = setInterval(() => {
        refs.allBody.style.backgroundColor = getRandomHexColor();
        refs.startBtnChangeColor.setAttribute('disabled', true);
        refs.stopBtnColor.removeAttribute('disabled', true);
    }, 1000);

};

function stopChangeColor() {
    clearInterval(onChangeColor);
    refs.stopBtnColor.setAttribute('disabled', true);
    refs.startBtnChangeColor.removeAttribute('disabled', true);
};