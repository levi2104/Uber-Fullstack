import dotenv from 'dotenv'
import express from "express";
import cors from 'cors'
import cookieParser from 'cookie-parser';

import connectToDb from './db/db.js';
import userRoutes from './routes/userRoutes.js'
import captainRoutes from './routes/captainRoutes.js'


dotenv.config();
const port = process.env.PORT || 3000
const app = express()

connectToDb();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('API Running')
})

app.use('/users', userRoutes)
app.use('/captains', captainRoutes)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})