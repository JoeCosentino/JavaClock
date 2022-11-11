setInterval(setClock, 1000)

function setClock() {
    const currentDate = new Date();
    const setSeconds = currentDate.getSeconds() / 60;
    const setMinutes = (setSeconds + currentDate.getMinutes()) / 60;
    const setHours = (setMinutes + currentDate.getHourss()) / 12;
}