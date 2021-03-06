const Joi = require('joi');

const usersSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().length(6).required(),
  image: Joi.string(),
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
