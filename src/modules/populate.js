const populate = (apiForGame) => {
  const holder = document.querySelector('.score-holder');
  apiForGame = apiForGame.sort((a, b) => b.score - a.score);
  const nameAndUserScore = apiForGame.map((list) => `<p>${list.user} : ${list.score} </p>`).join('');
  holder.innerHTML = nameAndUserScore;
};

export default populate;