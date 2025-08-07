import express from 'express'
import { body } from 'express-validator'
import { registerUser } from '../controllers/userController.js'

const router = express.Router()

router.post(
  "/register",
  [
    body("email").trim().isEmail().withMessage("Invalid Email"),
    body("fullname.firstname")
      .trim()
      .isLength({ min: 3 })
      .withMessage("First name must be at least 3 characters long"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Password must be 6 characters long"),
  ],
  registerUser
);

export default router