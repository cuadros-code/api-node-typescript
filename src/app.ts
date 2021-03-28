import express from 'express'
import route from './routes/index'
import morgan from 'morgan'
import cors from 'cors'
const app = express()

app.use(cors())

app.use(morgan('dev'))

app.use(express.json())

app.use(route)

export default app