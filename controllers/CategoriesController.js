const { Category } = require('../models');

const controllerCreateCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await Category.create({ name });

    return res.status(201).json(result);
  } catch (e) {
    next(e);
  }
};

const controllerGetAllCategories = async (req, res, next) => {
  try {
    const result = await Category.findAll();

    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  controllerCreateCategory,
  controllerGetAllCategories,
};