import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');
const amount = document.querySelector('input[name = "amount"]');

form.addEventListener('submit', onSubmit);

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    const obj = {
      position,
      delay,
    };
    setTimeout(() => {
      if (shouldResolve) {
        resolve(obj);
      } else {
        reject(obj);
      }
    }, delay);
  });
  return promise;
}

function onSubmit(evt, amount, delay, step) {
  evt.preventDefault();
  for (let i = 0; i < amount + 1; i++) {
    const promise = createPromise(i + 1, delay.value + step.value * i);

    promise
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
