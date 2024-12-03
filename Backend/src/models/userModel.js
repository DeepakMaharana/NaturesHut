const poolClient = require('../config/database');

const getUserByEmail = async (email) => {
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await poolClient.query(query, values);
    return result.rows[0];
};

module.exports = { getUserByEmail };
