import { addScore } from './modules/addscore.js';
import getscores from './modules/getscore.js';
import './style.css';

const form = document.querySelector('.form');
const refreshBtn = document.querySelector('.refresh');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nameInput = document.querySelector('.name').value;
  const scoreInput = document.querySelector('.score').value;
  addScore(nameInput, scoreInput);
  document.querySelector('.name').value = '';
  document.querySelector('.score').value = '';
});

refreshBtn.addEventListener('click', () => {
  getscores();
});

window.onload = getscores;