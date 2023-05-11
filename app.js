import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/authRoute.js'

const port = process.env.PORT || 8000

const app = express()
dotenv.config()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('view'))

// Routes
app.use('/',authRoute)

app.listen(port)