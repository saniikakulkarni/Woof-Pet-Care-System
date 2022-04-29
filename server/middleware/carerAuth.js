const jwt = require('jsonwebtoken')
const PetCarer = require('../models/petcarer')

const carerAuth = async (req,res,next) => {
    try{
        const authHeader = req.headers['authorization']
        const token = authHeader.split(' ')[1]
        const decoded = jwt.verify(token, "petcarersecret")
        const petcarer = await PetCarer.findOne({ _id: decoded._id, 'tokens.token' : token })

        if(!petcarer){
            throw new Error()
        }

        req.token = token
        req.petcarer = petcarer
        next()

    } catch(e) {
        res.send({ error: 'Please Authenticate', e }).status(401)
    }
}

module.exports = carerAuth