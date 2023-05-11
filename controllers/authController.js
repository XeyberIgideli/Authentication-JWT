import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

function login(req,res) {
    const {username,password} = req.body
    if(!username || !password) {
        throw Error('Please provide username or password')
    }

    let id = new Date().getDate()

    const token = jwt.sign({id,username},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.status(200).json({msg:'user created',token})
}
function getDashboard(req,res) {
    const authHeader = req.headers.authorization
    const token = req.headers.authorization.split(' ')[1]
    if(!authHeader || !authHeader.startsWith('Bearer')) {
       throw Error('No token is provided!')
    }    
    try {
        const decoded = jwt.verify(token,process.env.JWT_SECRET)
        res.json({msg:`Hello ${decoded.username}`,secret:'here is your authorized data'})
    } catch(err) {
        throw Error('You are not authorized to this data!')
    }

}
export {login,getDashboard}