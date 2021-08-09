const getAPi = require('./api');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const END_POINT = 'https://swapi.dev/api/films';
const port = 3000;

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.status(200).send({
    message: 'World'
  });
});

app.post('/soma', (req, res) => {
  const { num1, num2 } = req.body;
  const soma = (number1, number2) => parseInt(number1) + parseInt(number2);
  res.send(`Resultado da soma: ${soma(num1, num2)}`);
});

app.get('/starwars/films', async (req, res) => {
  const resposta = await getAPi(END_POINT)
  res.send(resposta.map((films) => `Film's name: ${films.title}`));
});

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`)
});
