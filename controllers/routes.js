const express = require('express');
const usersValidation = require('../middlewares/usersValidation');
const usersController = require('./UsersController');
const getUserAuth = require('../middlewares/getUserAuth');

const loginValidation = require('../middlewares/loginValidation');
const loginController = require('./LoginController');

const usersRouter = express.Router({ mergeParams: true });
const loginRouter = express.Router({ mergeParams: true });

usersRouter.post('/', usersValidation, usersController.controllerCreateUser);
usersRouter.get('/', getUserAuth, usersController.controllerGetUser);

loginRouter.post('/', loginValidation, loginController.controllerLogin);

module.exports = {
  usersRouter,
  loginRouter,
};