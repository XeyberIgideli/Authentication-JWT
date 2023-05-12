import jwt from 'jsonwebtoken'
import { BadRequest } from '../utils/Error.js'
import dotenv from 'dotenv'

function login(req,res) {
    const {username,password} = req.body
    if(!username || !password) {
        throw new BadRequest('Please provide username or password')
    }

    let id = new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:'user created',token})
}
function getDashboard(req,res) {
    const user = req.user
    res.json({msg:`Hello ${user.username}`,secret:'here is your authorized data'})
}
export {login,getDashboard}