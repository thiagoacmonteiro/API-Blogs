const Joi = require('joi');

const usersSchema = Joi.object({
  email: Joi.string().min(1).email().required(),
  password: Joi.string().min(1).required(),
}).messages({
  'any.required': '{{#label}} is required',
  'string.min': '{{#label}} is not allowed to be empty',
});

module.exports = (req, res, next) => {
  const { error } = usersSchema.validate(req.body);

  if (error) {
    const { message } = error;

    return res.status(400).json({ message });
  }

  next();
};
