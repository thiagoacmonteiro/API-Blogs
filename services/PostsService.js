const jwt = require('jsonwebtoken');
const { BlogPost, Category, User } = require('../models');

const SECRET = 'POST_LOGIN_SECRET';

const serviceCreatePost = async (authorization, title, content, categoryIds) => {
  const verifyIds = await categoryIds.map(async (categoryId) => {
    const found = await Category.findByPk(categoryId);

    return found;
  });

  const verifiedIds = await Promise.all(verifyIds);

  if (verifiedIds.includes(null)) {
    return { code: 400, response: { message: '"categoryIds" not found' } };
  }

  const verifyJwt = jwt.verify(authorization, SECRET);
  
  const user = await User.findOne({ where: { email: verifyJwt.data.email } });

  const result = await BlogPost.create({ title, content, categoryIds, userId: user.id });
  
  return { code: 201, response: result };
};

module.exports = {
  serviceCreatePost,
};
