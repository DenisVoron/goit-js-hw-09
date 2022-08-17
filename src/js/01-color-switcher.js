const refs = {
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
}


const kaleidoscope = {
    intervalId: null,
    isActive: false,


    start() {

        if (this.isActive) {
            return;
        }
        this.isActive = true;

        //console.log('click on start');

        this.intervalId = setInterval(() => {
            const color = getRandomHexColor();
            console.log(color);

            document.body.style.backgroundColor = color;
        }, 1000);
    },

    stop() {
        clearInterval(this.intervalId);
    },
};


refs.startBtn.addEventListener('click', () => {
    kaleidoscope.start();
});

refs.stopBtn.addEventListener('click', () => {
    kaleidoscope.stop();
    console.log('stop');
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
