require('dotenv').config();

const config = {
  out: './drizzle',
  schema: './Models/index.js',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};

module.exports = config;
