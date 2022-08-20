import Notiflix from 'notiflix';
//console.log(Notify);

const refs = {
  form: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"]'),
  btn: document.querySelector('button'),
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
  //const clickForm = e.currentTarget;
  //console.log(clickForm);
  const formData = new FormData(e.currentTarget);
  console.log(formData);

  formData.forEach((value, name) => {
    //console.log('onFormSabmit -> value', value);
    //console.log('onFormSabmit -> name', name);
    delay = formData.get("delay");
    step = formData.get("step");
    amount = formData.get("amount");

    Number(delay);

    console.log(delay);
    console.log(step);
    console.log(amount);

    for (let i = 1; i <= amount; i++) {
      createPromise(i, delay)
        .then((position, delayNum) => {
          Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
          //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);

        })
        .catch((position, delayNum) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
          //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        });
    }
  });
  /*const {
    elements: { delay, step, amount },
  } = formData;*/


}
