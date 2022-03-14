const { serviceCreateUser, serviceGetUserById } = require('../services/UsersService');
const { User } = require('../models');

const controllerCreateUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const result = await serviceCreateUser(displayName, email, password, image);

    return res.status(result.code).json(result.response);
  } catch (e) {
    next(e);
  }
};

const controllerGetAllUsers = async (req, res, next) => {
  try {
    const result = await User.findAll();

    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

const controllerGetUserById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await serviceGetUserById(id);

    return res.status(result.code).json(result.response);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  controllerCreateUser,
  controllerGetAllUsers,
  controllerGetUserById,
};