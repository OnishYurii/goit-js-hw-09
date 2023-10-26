import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/confetti.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const optionsFlatpickr = {
  altInput: true,
  altFormat: 'F j, Y',
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    date = refs.fp.selectedDates[0];
    currentTime = Date.now();
    checkDate(date, currentTime);
  },
};

const refs = {
  fp: flatpickr('#datetime-picker', optionsFlatpickr),
  startBtn: document.querySelector('button'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  text: document.querySelector('p[data-text]'),
};

let date;
let currentTime;

refs.startBtn.addEventListener('click', startCount);

function checkDate(date, currentTime) {
  if (date < currentTime) {
    Notify.warning('Please choose a date in the future');
  } else {
    refs.startBtn.removeAttribute('disabled');
    refs.startBtn.classList.add('active-btn');
  }
}

function startCount() {
  refs.text.classList.remove('ghost');
  const intervalId = setInterval(() => {
    date = refs.fp.selectedDates[0];
    currentTime = Date.now();
    const diff = date - currentTime;
    if (diff <= 0) {
      clearInterval(intervalId);
      refs.text.textContent = 'You did it \u{1F60B}';
      refs.text.classList.remove('loading');
      return;
    }
    const convertedTimeFromMs = convertMs(diff);
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

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function renderTimer(obj) {
  refs.days.textContent = addLeadingZero(obj.days);
  refs.hours.textContent = addLeadingZero(obj.hours);
  refs.minutes.textContent = addLeadingZero(obj.minutes);
  refs.seconds.textContent = addLeadingZero(obj.seconds);
}
