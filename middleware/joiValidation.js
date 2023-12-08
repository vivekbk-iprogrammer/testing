const Joi = require('joi');

const joiValidation = (req, res, next) => {
    const { email, password } = req.body;
    const schema = Joi.object({
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};:\'",.<>/?]{3,30}$'))
            
    });

    const result = schema.validate({ email, password });

    if (result.error) {
        return res.status(500).send(result.error.details[0].message);
    }
    
    next();
};

module.exports = joiValidation;
