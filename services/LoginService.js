const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET = 'POST_LOGIN_SECRET';

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const serviceLogin = async (email, password) => {
  const found = await User.findOne({ where: { email, password } });

  if (found === null) {
    return { code: 400, response: { message: 'Invalid fields' } };
  }

  const token = jwt.sign({ data: { email } }, SECRET, jwtConfig);

  return { code: 200, response: { token } };
};

module.exports = {
  serviceLogin,
};