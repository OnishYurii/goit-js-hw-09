import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/confetti.css';

const options = {
  altInput: true,
  altFormat: 'F j, Y',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
const fp = flatpickr('#datetime-picker', options);
const startBtn = document.querySelector('button');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

startBtn.addEventListener('click', startCount);

function startCount() {
  const intervalId = setInterval(() => {
    const date = new Date(fp.selectedDates);
    const selectedDateInMs = date.getTime();
    const currentTime = Date.now();
    const diff = selectedDateInMs - currentTime;
    console.log(diff);
    if (diff <= 0) {
      clearInterval(intervalId);
      return;
    }
    const convertedTimeFromMs = convertMs(diff);
    addLeadingZero(convertedTimeFromMs);
    renderTimer(convertedTimeFromMs);
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function renderTimer(obj) {
  days.textContent = obj.days;
  hours.textContent = obj.hours;
  minutes.textContent = obj.minutes;
  seconds.textContent = obj.seconds;
}

function addLeadingZero(obj) {
  Object.values(obj).forEach(number => {
    number.toString().number.padStart(2, '0');
  });
}
