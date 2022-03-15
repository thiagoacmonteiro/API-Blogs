const express = require('express');
const usersValidation = require('../middlewares/usersValidation');
const usersController = require('./UsersController');
const tokenAuth = require('../middlewares/tokenAuth');

const loginValidation = require('../middlewares/loginValidation');
const loginController = require('./LoginController');

const categoriesValidation = require('../middlewares/categoriesValidation');
const categoriesController = require('./CategoriesController');

const usersRouter = express.Router({ mergeParams: true });
const loginRouter = express.Router({ mergeParams: true });
const categoriesRouter = express.Router({ mergeParams: true });

usersRouter.post('/', usersValidation, usersController.controllerCreateUser);
usersRouter.get('/', tokenAuth, usersController.controllerGetAllUsers);
usersRouter.get('/:id', tokenAuth, usersController.controllerGetUserById);

loginRouter.post('/', loginValidation, loginController.controllerLogin);

categoriesRouter.post(
  '/', tokenAuth, categoriesValidation, categoriesController.controllerCreateCategory,
);
categoriesRouter.get('/', tokenAuth, categoriesController.controllerGetAllCategories);

module.exports = {
  usersRouter,
  loginRouter,
  categoriesRouter,
};