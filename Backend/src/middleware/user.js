const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET; // Replace with actual secret in production

const userAuthMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('bearer ')) {
    return res.status(403).json({error: 'user authentication fail' });
  }

  const token = authHeader.split(' ')[1];

  try {
    // Implement your JWT verification logic here using JWT_SECRET
    // const decoded = jwt.verify(token, JWT_SECRET);
    // ... handle decoded data

  } catch (err) {
    return res.status(403).json({ error: 'user authentication fail' });
  }

  next();
};

module.exports = userAuthMiddleware;