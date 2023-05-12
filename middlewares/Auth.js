import jwt from 'jsonwebtoken'
import { Unauthenticated } from '../utils/Error.js'

function authenticationMiddleware(req,res,next) {
    const authHeader = req.headers.authorization
    const token = req.headers.authorization.split(' ')[1]

    if(!authHeader || !authHeader.startsWith('Bearer')) {
       throw new Unauthenticated('No token is provided!')
    }    

    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        const {id,username} = decoded
        req.user = {id,username}
        next()
    } catch(err) {
        throw new Unauthenticated('You are not authorized to this data!')
    }

}
export {authenticationMiddleware}