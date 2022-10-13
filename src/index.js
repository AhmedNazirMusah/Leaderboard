import { addScore } from './modules/addscore.js';
import getscores from './modules/getscore.js';
import './style.css';

const form = document.querySelector('.form');
const refreshBtn = document.querySelector('.refresh');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('.name');
  const scoreInput = document.querySelector('.score');
  if (nameInput.value.length !== 0 && scoreInput.value.length !== 0) {
    addScore(nameInput.value, scoreInput.value);
    scoreInput.classList.remove('red-border');
    scoreInput.classList.remove('red-border');
    document.querySelector('.name').value = '';
    document.querySelector('.score').value = '';
  } else {
    if (nameInput.value.length === 0) {
      nameInput.classList.add('red-border');
    } else {
      nameInput.classList.remove('red-border');
    }

    if (scoreInput.value.length === 0) {
      scoreInput.classList.add('red-border');
    } else {
      scoreInput.classList.remove('red-border');
    }
  }
});

refreshBtn.addEventListener('click', () => {
  getscores();
});

window.onload = getscores;
