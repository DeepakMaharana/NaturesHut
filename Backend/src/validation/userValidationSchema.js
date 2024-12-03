const zod = require("zod");

const signUpSchema = zod.object({
  firstName: zod.string().min(3, 'First name is required'),
  lastName: zod.string().min(3, 'Last name is required'),
  email: zod.string().email('Invalid email address'),
  password: zod.string().min(8, 'Password must be at least 8 characters'),
});


const signInSchema = zod.object({
    email: zod.string().email('Invalid email format'),
    password: zod.string().min(8, 'Password must be at least 8 characters long'),
});

module.exports = {signUpSchema, signInSchema};
