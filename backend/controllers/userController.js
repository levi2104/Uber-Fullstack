import userModel from "../models/userModel.js";
import { validationResult } from 'express-validator'
import { createUser } from "../services/userService.js";

export const registerUser = async (req, res, next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

  const { fullname, email, password } = req.body

  const hashedPassword = await userModel.hashPassword(password)

  const user = await createUser({
    firstname: fullname.firstname, 
    lastname: fullname.lastname, 
    email,
    password: hashedPassword,
  })

  const token = user.generateAuthToken()

  return res.status(201).cookie('token', token).json({ token, user })
}