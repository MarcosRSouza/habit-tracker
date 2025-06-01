const { Pool } = require('pg');

const dbUser = process.env.DATABASE_USER;
const dbName = process.env.DATABASE_NAME;
const dbDomain = process.env.DATABASE_DOMAIN;
const dbPassword = process.env.DATABASE_PASSWORD;

const pool = new Pool({
  user: dbUser,
  host: process.env.NODE_ENV === 'development' ? 'localhost' : dbDomain,
  database: dbName,
  password: dbPassword,
  port: 5432,
});

module.exports = pool;