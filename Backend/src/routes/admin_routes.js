const express = require('express');
const router = express.Router();
const adminMiddleware = require('../middleware/admin');
const jwt = require('jsonwebtoken');
const validateRequest = require('../validation/validateRequest');
const { signInSchema, signUpSchema } = require('../validation/userValidationSchema');
const {signIn, signUp, verifyAdmin } = require('../controllers/adminAuthController');

// Assuming these are defined elsewhere (models or interfaces)
// const User, Admin, Course;

// const JWT_SECRET = process.env.JWT_SECRET; // Replace with actual secret in production

// Route to get sample villas (replace with actual villa data logic)
router.get("/", (req,res)=>{
  res.status(200).json({ status: 'Admin running' });

})

router.get("/villas", (req, res) => {
  return res.status(400).json([
    {
      villaName: "Home",
      villaLocation: "Home",
      villaType: "Home",
    },
  ]);
});

router.post('/signin', validateRequest(signInSchema), signIn);

router.post('/signup', validateRequest(signUpSchema), signUp );

router.get('/verify-token', verifyAdmin);

router.post("/location/registration", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imagelink = req.body.imagelink;
  const price = req.body.price;

  // Implement your course creation logic here (using Course model)
  // ...

  // res.status(200).json({ msg: "Course created successfully", courseId: newCourse._id }); // Replace with appropriate response
});

router.post("/location/update", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imagelink = req.body.imagelink;
  const price = req.body.price;

  // Implement your course creation logic here (using Course model)
  // ...

  // res.status(200).json({ msg: "Course created successfully", courseId: newCourse._id }); // Replace with appropriate response
});

router.post("/location/delete", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const imagelink = req.body.imagelink;
  const price = req.body.price;

  // Implement your course creation logic here (using Course model)
  // ...

  // res.status(200).json({ msg: "Course created successfully", courseId: newCourse._id }); // Replace with appropriate response
});

module.exports = router;