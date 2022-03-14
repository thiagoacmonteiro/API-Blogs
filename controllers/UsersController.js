const { serviceCreateUser } = require('../services/UsersService');

const controllerCreateUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const result = await serviceCreateUser(displayName, email, password, image);

    return res.status(result.code).json(result.response);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  controllerCreateUser,
};