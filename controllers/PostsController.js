const { serviceCreatePost } = require('../services/PostsService');
const { BlogPost, Category, User } = require('../models');

const controllerCreatePost = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { title, content, categoryIds } = req.body;
    const result = await serviceCreatePost(authorization, title, content, categoryIds);

    return res.status(result.code).json(result.response);
  } catch (e) {
    next(e);
  }
};

const controllerGetAllPosts = async (req, res, next) => {
  try {
    const result = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories' },
      ],
    });

    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  controllerCreatePost,
  controllerGetAllPosts,
};
