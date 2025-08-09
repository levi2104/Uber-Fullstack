import express from 'express'
import { body } from 'express-validator'
import { registerCaptain, loginCaptain, getCaptainProfile, logoutCaptain } from '../controllers/captainController.js'
import { authCaptain } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/register', [
  body('email').isEmail().withMessage('Invalid Email'),
  body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('vehicle.color').isLength({ min: 3 }).withMessage('Vehicle color must be at least 3 characters long'),
  body('vehicle.plate').isLength({ min: 3 }).withMessage('Vehicle plate must be at least 3 characters long'),
  body('vehicle.capacity').isLength({ min: 1 }).withMessage('Vehicle capacity must be at least 1'),
  body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
], registerCaptain)

router.post("/login", [
  body("email").isEmail().withMessage("Invalid Email"),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], loginCaptain);

router.get('/profile', authCaptain, getCaptainProfile)

router.post('/logout', authCaptain, logoutCaptain)

export default router