const { Pool } = require('pg');
const bcrypt = require('bcrypt');

require('dotenv').config();

const poolClient = new Pool({
  connectionString: process.env.DATABASE_URL,
});

poolClient.on('connect', () => {
  console.log('Database connected successfully');
});

poolClient.on('error', (err) => {
  console.error('Database connection error', err);
  process.exit(-1);
});

// ... existing imports ...

async function hashPassword(password) {
  const saltRounds = 10;
  return bcrypt.hash(password, saltRounds);
}

// ... existing exports ...

module.exports = {
  hashPassword,
  poolClient,
};