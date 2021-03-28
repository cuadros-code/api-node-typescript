import app from './app'
import dotenv from 'dotenv'
import dbConnect from './config/db'
dotenv.config()

const port = process.env.PORT || 4001

dbConnect()
app.listen(port, () => console.log('server on listening', port))
