import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    input: document.getElementById('datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    day: document.querySelector('span[data-days]'),
    hour: document.querySelector('span[data-hours]'),
    minute: document.querySelector('span[data-minutes]'),
    second: document.querySelector('span[data-seconds]'),
}

let deltaTime = 0;
refs.startBtn.disabled = true;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,

    onChange(selectedDates) {
        if (selectedDates[0] <= Date.now()) {
            alert('The date cannot be in the past tense');
        }
    },
    onClose(selectedDates) {
        refs.startBtn.disabled = false;

        deltaTime = selectedDates[0] - Date.now();
        console.log(deltaTime);
        refs.startBtn.addEventListener('click', сountdown);

        function сountdown() {
            const timeId = setInterval((deltaTime) => {

                deltaTime = selectedDates[0] - Date.now();

                if (deltaTime < 1000) {
                    clearInterval(timeId);
                }

                const { days, hours, mins, secs } = getTimeComponents(deltaTime);

                refs.day.textContent = days;
                refs.hour.textContent = hours;
                refs.minute.textContent = mins;
                refs.second.textContent = secs;

            }, 1000);

        };
    },

};

flatpickr(refs.input, options);

function pad(value) {
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {

    const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = pad(
        Math.floor((time % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60) / (1000 * 60))));
    const secs = pad(Math.floor((time % (1000 * 60) / 1000)));

    return { days, hours, mins, secs };
}
