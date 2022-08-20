import Notiflix from 'notiflix';
//console.log(Notify);

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmitForm);

let delay = 0;
let step = 0;
let amount = 0;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(position, delay);
        console.log(position);
        console.log(delay);
      } else {
        reject(position, delay);
      }
    }, delay);

  })
}

function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  console.log(formData);

  formData.forEach((value, name) => {

    delay = formData.get("delay");
    step = formData.get("step");
    amount = formData.get("amount");

    const delayEl = Number(delay);
    const stepEl = Number(step);
    const amountEl = Number(amount);

    if (delayEl <= 0 || stepEl <= 0 || amountEl <= 0) {
      alert('A positive value must be entered');
    }


    for (let i = 1; i <= amount; i++) {
      createPromise(i, delay)
        .then((position, delay) => {
          Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
        })
        .catch((position, delay) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  });
}
