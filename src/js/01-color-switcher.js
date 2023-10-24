const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.body;
let timerId;

startBtn.addEventListener('click', renderBackground);
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.toggleAttribute('disabled');
});

function renderBackground() {
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.toggleAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
