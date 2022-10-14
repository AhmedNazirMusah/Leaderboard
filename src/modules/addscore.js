export default class NewScore {
  constructor(user, score) {
    this.user = user;
    this.score = score;
  }
}

const addScore = async (user, score) => {
  const UserInput = new NewScore(user, score);
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Nsex8thFeV4zbjEDkarK/scores/', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(UserInput),
  });
  const scoreFromApi = await response.json();
  return scoreFromApi;
};

const addsuccess = (message) => {
  const messageContainer = document.createElement('div');
  const inputdiv = document.querySelector('.second-div');
  messageContainer.classList.add('cmessage');
  messageContainer.innerHTML = message;
  inputdiv.append(messageContainer);
  setTimeout(() => {
    messageContainer.remove();
  }, 2000);
};

export { addScore, addsuccess };