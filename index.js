const express = require('express');
const router = require('./controllers/routes');
const error = require('./middlewares/error');

const app = express();

app.use(express.json());

app.use(error);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', router.usersRouter);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
