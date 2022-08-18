import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
console.log(flatpickr);

const refs = {
    input: document.getElementById("datetime-picker"),
    startBtn: document.querySelector('button[data-start]'),
    day: document.querySelector('span[data-days]'),
    hour: document.querySelector('span[data-hours]'),
    minute: document.querySelector('span[data-minutes]'),
    second: document.querySelector('span[data-seconds]'),
}

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        console.log(selectedDates[0]);
    },
};

console.log(options.defaultDate);

flatpickr(refs.input, options);


const сountdown = {
    start() {
        const startTime = options.defaultDate;
        console.log(startTime);
        setInterval(() => {
            const currentTime = Date.now();
            //console.log('currentTime ->', currentTime);
            const deltaTime = currentTime - startTime;
            const { hours, mins, secs } = getTimeComponents(deltaTime);
            //console.log(`${hours}:${mins}:${secs}`);
            //console.log(startTime);
            refs.hour.textContent = `${hours}`;
            refs.minute.textContent = `${mins}`;
            refs.second.textContent = `${secs}`;
        }, 1000);
    },
};

//сountdown.start();

function pad(value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
    const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
    );

    const mins = pad(Math.floor((time % (1000 * 60 * 60) / (1000 * 60))));
    const secs = pad(Math.floor((time % (1000 * 60) / 1000)));

    return { hours, mins, secs };

}