import { addScore, addsuccess } from './modules/addscore.js';
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
    document.querySelector('.name').value = '';
    document.querySelector('.score').value = '';
    addsuccess('Sore Added Succesfully');
  }
});

refreshBtn.addEventListener('click', () => {
  getscores();
});

window.onload = getscores;
