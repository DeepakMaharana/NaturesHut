const express = require('express');
const router = express.Router();
const userValidation = require('../validation/userValidationSchema');
const { hashPassword } = require('../db/postgresDb');
const poolClient = require('../db/postgresDb');
const { signIn, signUp, verifyUser } = require('../controllers/userAuthController');
const validateRequest = require('../validation/validateRequest');
const { signInSchema, signUpSchema } = require('../validation/userValidationSchema');

router.post('/signin', validateRequest(signInSchema), signIn);

router.post('/signup', validateRequest(signUpSchema), signUp );

router.get('/verify-token', validateRequest(signUpSchema), verifyUser);


router.post('/enroll', async (req, res) => {
  const { userId, courseId } = req.body; // Destructuring for concise code

  try {
    // Assuming User and Course models/functions are defined elsewhere
    const user = await User.findById(userId);
    const course = await Course.findById(courseId);

    if (!user || !course) {
      return res.status(404).json({ message: 'User or course not found' });
    }

    user.courses.push(course);
    await user.save();

    res.status(200).json({ message: 'Enrollment successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;