const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req,res,next) => {
    try{
        // const token = req.header('Authorization').replace('Bearer ','')
        const authHeader = req.headers['authorization']
        const token = authHeader.split(' ')[1]
        const decoded = jwt.verify(token, "thisismynewcourse")
        const user = await User.findOne({ _id: decoded._id, 'tokens.token' : token })

        if(!user){
            throw new Error()
        }

        req.token = token
        req.user = user
        next()

    } catch(e) {
        res.status(401).send({ error: 'Please Authenticate',e})
    }
}

module.exports = auth