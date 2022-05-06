require('dotenv').config();

module.exports = {
  APP: {
    PORT: process.env.PORT,
    SECRET_KEY: process.env.SECRET_KEY,
    ADMIN_PASS: process.env.ADMIN_PASS,
    YAHOO_ID: process.env.YAHOO_ID,
    YAHOO_PASS: process.env.YAHOO_PASS
  },
  DB: {
    URL: process.env.DB_URL
  }
};
