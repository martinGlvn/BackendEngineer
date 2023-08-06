// init app
const { config } = require("dotenv");

config({
  path: `.env.${process.env.NODE_ENV || "development"}.local`,
});

const { PORT, NODE_ENV, API_VERSION } = process.env;

module.exports = {
  PORT,
};
