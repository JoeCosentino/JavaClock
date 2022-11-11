setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    const currentDate = new Date();
    const setSeconds = currentDate.getSeconds() / 60;
    const setMinutes = (setSeconds + currentDate.getMinutes()) / 60;
    const setHours = (setMinutes + currentDate.getHours()) / 12;
    setRotation(secondHand, setSeconds);
    setRotation(minuteHand, setMinutes);
    setRotation(hourHand, setHours);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();