const axios = require('axios');

async function getApi(url) {
  try {
    const response = await axios.get(url)
      .then((result) => result.data)
    return response.results;
  } catch (error) {
    return console.error(`Ocorreu um erro - ${error}`)
  }
}

module.exports = getApi;
