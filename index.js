const express = require('express');

const app = express();

app.listen(3000, () => {
  console.log('Aplicação ouvindo na porta 3000')
});

app.get('/hello', (req, res) => {
  res.status(200).send('World');
});
