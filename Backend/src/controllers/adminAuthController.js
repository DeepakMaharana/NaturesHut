const bcrypt = require('bcrypt');
const { generateToken, verifyToken } = require('../config/jwt');
const { getAdminByEmail } = require('../models/adminModel');
const logger = require('../utils/logger');
const {poolClient} = require('../config/database');
const { hashPassword } = require('../db/postgresDb');

const signIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Fetch user from the database
        const user = await getAdminByEmail(email);
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = generateToken({ id: user.id, email: user.email, role: user.role });

        logger.info(`User signed in: ${user.email}`);
        return res.status(200).json({
            message: 'Sign in successful',
            token,
            user: {
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                role: user.role,
            },
        });
    } catch (error) {
        logger.error('Error during sign-in', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
};

const signUp  =  async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
  
      // Hash the password (you should implement this function)
      const hashedPassword = await hashPassword(password);
  
      // Create user in database
      const result = await poolClient.query(
        'INSERT INTO admins (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)',
        [firstName, lastName, email, hashedPassword]
      );
  
      // Release connection back to pool after query execution (important)
      // poolClient.release();
  
      return res.status(201).json({ message: 'User created successfully', data: result.rows[0] });
    } catch (error) {
      console.error('Error creating user:', error);
      // poolClient.release(); // Release connection on error as well
      return res.status(500).json({ error: 'Internal server error', message:error });
    }
}

const verifyAdmin = async (req, res) => {
  try {
    const token = req.headers.authorization;
    if(!token)
    {
      return res.status(401).json({ message: "Invalid token, verification failed"});
    }
    const decoded = token.split(" ");
    const response = verifyToken(decoded[1]);

    console.log(response);

    if(response)
    {
      logger.info(`User signed in: ${response.email}`);
      return res.status(200).json({
        message: "Sign in successful"
      });
    }
    else{
      return res.status(401).json({ message: "Invalid token, verification failed"});
    }

  } catch (error) {
    logger.error("Error during sign-in", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { signIn, signUp, verifyAdmin };
