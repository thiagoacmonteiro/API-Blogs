const { serviceCreatePost } = require('../services/PostsService');

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

module.exports = {
  controllerCreatePost,
};
