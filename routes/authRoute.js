import express from "express"
import {login,getDashboard} from "../controllers/authController.js"
import { authenticationMiddleware } from "../middlewares/Auth.js"

const router = express.Router()

router.get('/dashboard',authenticationMiddleware,getDashboard)
router.post('/login',login)

export default router

