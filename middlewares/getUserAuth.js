const jwt = require('jsonwebtoken');

const SECRET = 'POST_LOGIN_SECRET';

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    jwt.verify(authorization, SECRET);

    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
