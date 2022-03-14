const { serviceLogin } = require('../services/LoginService');

const controllerLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await serviceLogin(email, password);

    return res.status(result.code).json(result.response);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  controllerLogin,
};