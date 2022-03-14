const express = require('express');
const usersValidation = require('../middlewares/usersValidation');
const usersController = require('./UsersController');

const usersRouter = express.Router({ mergeParams: true });

usersRouter.post('/', usersValidation, usersController.controllerCreateUser);

module.exports = {
  usersRouter,
};