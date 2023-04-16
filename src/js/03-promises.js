import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('.form')
};

refs.form.addEventListener('submit', onSubmitClick);

function onSubmitClick(event) {
  event.preventDefault();

  let {
    elements: { delay, step, amount },
  } = event.currentTarget;

  delay = Number(delay.value);
  step = Number(step.value);
  amount = Number(amount.value);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false });
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false });
      })
      // delay += step;
      // .finally(() => form.reset());
      .finally(() => form.reset());
  }

  // for (let i = 0; i < amount; i++) {
  //   const position = i + 1;
  //   const delay = firstDelay + i * delaySteep;
  //   createPromise(position, delay)
  //     .then(({ position, delay }) => {
  //       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //       Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //     })
  //     .catch(({ position, delay }) => {
  //       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  //       Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  //     })
  //     .finally(() => form.reset());
  // }

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;

    return new Promise((fulfill, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          fulfill({ position, delay });
        } else {
          reject({ position, delay });
        }
      }, delay);
    });
  }
}