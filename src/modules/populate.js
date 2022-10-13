const populate = (apiForGame) => {
  const scoresContainer = document.querySelector('.score-holder');
  // scoresContainer.innerHTML = '';
  apiForGame = apiForGame.sort((a, b) => b.score - a.score);
  const nameAndUserScore = apiForGame.map((list) => `<p>${list.user} : ${list.score} </p>`).join('');
  scoresContainer.innerHTML = nameAndUserScore;
};

export default populate;