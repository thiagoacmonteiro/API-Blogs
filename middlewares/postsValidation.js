const Joi = require('joi');

const usersSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.required(),
}).messages({
  'any.required': '{{#label}} is required',
});

module.exports = (req, res, next) => {
  const { error } = usersSchema.validate(req.body);

  if (error) {
    const { message } = error;

    return res.status(400).json({ message });
  }

  next();
};