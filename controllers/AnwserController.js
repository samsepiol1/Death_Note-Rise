// getAI.js

const request = require('request');

const getAI = () => {
  return new Promise((resolve, reject) => {
    request.post(
      'http://localhost:4000/api/getAnswer',
      { json: { question: 'gere uma frase aleatoria sobre moral curta' } },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          resolve(body.message);
        } else {
          reject(error);
        }
      }
    );
  });
};

module.exports = { getAI };