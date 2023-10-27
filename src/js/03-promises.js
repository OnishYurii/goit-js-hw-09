import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

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

function onSubmit(evt) {
  evt.preventDefault();
  const amount = parseInt(form.elements.amount.value);
  const step = parseInt(form.elements.step.value);
  const delay = parseInt(form.elements.delay.value);
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + step * i)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
