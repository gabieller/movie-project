let config = require(`./dev.js`);

const environment = process.env.NODE_ENV;
if (environment == "production") {
  config = require(`./prod.js`);
}

module.exports = config;
