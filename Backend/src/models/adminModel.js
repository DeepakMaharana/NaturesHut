const {poolClient} = require('../config/database');

const getAdminByEmail = async (email) => {
    const query = 'SELECT * FROM admins WHERE email = $1';
    const values = [email];
    const result = await poolClient.query(query, values);
    return result.rows[0];
};

module.exports = { getAdminByEmail };
