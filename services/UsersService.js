const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET = 'POST_USER_SECRET';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const serviceCreateUser = async (displayName, email, password, image) => {
  const found = await User.findOne({ where: { email } });

  if (found) {
    return { code: 409, response: { message: 'User already registered' } };
  }

  const token = jwt.sign({ data: { displayName, email, image } }, SECRET, jwtConfig);

  await User.create({ displayName, email, password, image });
  
  return { code: 201, response: { token } };
};

const serviceGetUserById = async (id) => {
  const found = await User.findOne({ where: { id } });
  
  if (!found) {
    return { code: 404, response: { message: 'User does not exist' } };
  }
  
  return { code: 200, response: found };
};

module.exports = {
  serviceCreateUser,
  serviceGetUserById,
};