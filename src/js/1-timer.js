// Описаний у документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/dark.css";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const startButton = document.querySelector("[data-start]");
let userSelectedDate;


flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates,) {

    const defaultDate = new Date(); 

    if (selectedDates[0] <= defaultDate) {
      iziToast.show({
        title: 'Timer app',
        message: 'Встановіть коректну дату!',
        position: 'topRight',
        drag: true,
        color: 'red'
      });
      document.querySelector("[data-start]").disabled = true;
    } 

    else { 
            document.querySelector("[data-start]").disabled = false;
            userSelectedDate = selectedDates[0];
          }
    },  
});

startButton.addEventListener('click', () => { 

  const interval = setInterval(() => { 
    const now = new Date(); 
    const ms = userSelectedDate - now; 

    if (ms <= 0) { 

      clearInterval(interval);

      iziToast.show({
        title: 'Timer app',
        message: 'Час вийшов!',
        position: 'topRight',
        drag: true,
        color: 'green'
      });
      
      document.getElementById('datetime-picker').disabled = false;
      startButton.disabled = true;

    } 

      else { 

        document.getElementById('datetime-picker').disabled = true;
        document.querySelector("[data-start]").disabled = true;
        
        const time = convertMs(ms);

        document.querySelector("[data-days]").textContent = addLeadingZero(time.days); 
        document.querySelector("[data-hours]").textContent = addLeadingZero(time.hours); 
        document.querySelector("[data-minutes]").textContent = addLeadingZero(time.minutes); 
        document.querySelector("[data-seconds]").textContent = addLeadingZero(time.seconds);
        
      } 
  }, 1000);
  
      iziToast.show({
    title: 'Timer app',
    message: 'Таймаут установленно!',
    position: 'topRight',
    drag: true,
    color: 'yellow'
       });

});
  
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) { 
  return String(value).padStart(2, '0'); 
}



  