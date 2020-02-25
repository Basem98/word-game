require('dotenv').config();

module.exports = {
  APP: {
    PORT: process.env.PORT,
    SECRET_KEY: process.env.SECRET_KEY,
    ADMIN_PASS: process.env.ADMIN_PASS,
    GMAIL_ID: process.env.GMAIL_ID,
    GMAIL_PASS: process.env.GMAIL_PASS
  },
  DB: {
    URL: process.env.DB_URL
  }
};
