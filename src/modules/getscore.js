import populate from './populate.js';

const getscores = async () => {
  const data = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Nsex8thFeV4zbjEDkarK/scores/');
  const scoreFromApi = await data.json();
  if (data.ok) {
    populate(scoreFromApi.result);
  }
};

export default getscores;