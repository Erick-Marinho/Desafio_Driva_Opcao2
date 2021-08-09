const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
  res.status(200).send('World');
});

app.post('/soma', (req, res) => {
  const { num1, num2 } = req.body;
  const soma = (number1, number2) => parseInt(number1) + parseInt(number2);
  res.send(`Resultado da soma: ${soma(num1, num2)}`);
});

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`)
});
