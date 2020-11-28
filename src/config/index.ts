require("dotenv").config();

import Joi from "@hapi/joi";

const envVarsSchema = Joi.object({
  APP_PORT: Joi.string(),
  APP_HOST: Joi.string(),
  JWT_SECRET: Joi.string(),
})
  .unknown(true)
  .required();

const { error, value: envVars } = envVarsSchema.validate(process.env);

export default {
  host: process.env.APP_HOST,
  port: process.env.APP_PORT,
  jwtSecret: envVars.JWT_SECRET,
};
