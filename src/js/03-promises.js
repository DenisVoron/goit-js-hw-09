const delay = 0;
const refs = {
  forms: document.querySelector('.form'),
  inputDelay: document.querySelector('input[name="delay"]'),
  btn: document.querySelector('button'),
};

refs.btn.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve('werew');
      } else {
        reject('ewqeqe');
      }
    }, delay);

  })
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });