// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();

    const delay = parseInt(event.target.delay.value);
    const state = event.target.state.value;

    console.log(state);
    

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise
      .then((delay) => {
        iziToast.show({
            title: 'Promise',
            message: `Fulfilled promise in ${delay}ms`,
            position: 'topRight',
            drag: true,
            color: 'green'
          });
      })
      .catch((delay) => {
        iziToast.show({
            title: 'Promise',
            message: `Rejected promise in ${delay}ms`,
            position: 'topRight',
            drag: true,
            color: 'red'
          });
      });
  });
