import Notiflix from 'notiflix';
//console.log(Notify);

const refs = {
  form: document.querySelector('.form'),
};

refs.form.addEventListener('submit', onSubmitForm);


function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setInterval(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
        console.log(position);
        console.log(delay);
      } else {
        reject({ position, delay });
      }
    }, delay);

  })
}

function onSubmitForm(e) {
  e.preventDefault();

  let { elements: { delay, step, amount } } = e.currentTarget;

  let delayEl = Number(delay.value);
  const stepEl = Number(step.value);
  const amountEl = Number(amount.value);

  console.log(delayEl);
  console.log(stepEl);
  console.log(amountEl);


  for (let i = 1; i <= amountEl; i++) {
    createPromise(i, delayEl)
      .then(({ position, delay }) => {
        Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delayEl += stepEl;
  }

}
