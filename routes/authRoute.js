import express from "express"
import {login,getDashboard} from "../controllers/authController.js"

const router = express.Router()

router.get('/dashboard',getDashboard)
router.get('/login',login)

export default router

