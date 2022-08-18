import "flatpickr/dist/flatpickr.min.css";
import flatpickr from "flatpickr";
console.log(flatpickr);

refs = {
    input: document.getElementById("datetime-picker"),
    startBtn: document.querySelector('button[data-start]'),
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

//console.log(options.defaultDate);

flatpickr(refs.input, options);


const сountdown = {
    start() {
        const startTime = options.defaultDate;

        setInterval(() => {
            const currentTime = Date.now();
            //console.log('currentTime ->', currentTime);

            //console.log(currentTime - startTime);
            //console.log(startTime);
        }, 1000);
    },
};

сountdown.start();

