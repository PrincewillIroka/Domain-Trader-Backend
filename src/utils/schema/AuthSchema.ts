import Joi from "@hapi/joi";

const authSchema = {
    registerData: Joi.object({
        email: Joi.string().email({ minDomainSegments: 2 }),
        password: Joi.string().min(2),
    }).required(),
    loginData: Joi.object({
        email: Joi.string().email({ minDomainSegments: 2 }),
        password: Joi.string().min(2),
    }).required(),
};

export default authSchema;
