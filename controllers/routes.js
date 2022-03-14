const express = require('express');
const usersValidation = require('../middlewares/usersValidation');
const usersController = require('./UsersController');

const loginValidation = require('../middlewares/loginValidation');
const loginController = require('./LoginController');

const usersRouter = express.Router({ mergeParams: true });
const loginRouter = express.Router({ mergeParams: true });

usersRouter.post('/', usersValidation, usersController.controllerCreateUser);
loginRouter.post('/', loginValidation, loginController.controllerLogin);

module.exports = {
  usersRouter,
  loginRouter,
};