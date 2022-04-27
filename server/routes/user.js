const express = require('express')
const User = require('../models/user')
const PetCarer = require('../models/petcarer')
const Booking = require('../models/booking')
const sharp  = require('sharp')
const router = new express.Router()
const auth = require('../middleware/auth')
const multer = require('multer')

router.post('/users', async (req,res) => {
    const user = new User(req.body)

    try{
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req,res) => {
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/users/logout',auth, async(req,res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        res.send()
    } catch(e){
        res.status(500).send()
    }
})


router.post('/users/logoutAll', auth, async (req, res) => {
    try{
        req.user.tokens = []
        await req.user.save()

        res.send()
    } catch(e) {
        res.status(500).send()
    }
})

router.get('/users/me', auth, async (req,res) => {
    res.send(req.user)
})

router.get('/users/bookings', auth, async (req,res) => {
    try {
        const sort = {}
        if(req.query.sortBy){
            const parts = req.query.sortBy.split(":")
            sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
        }
        const bookings = await Booking.find({ userId: req.user._id }).populate({
            path:'petcarer',
            options:{
                sort
            }
        })
        res.send(bookings)
    } catch(e) {
        res.status(500).send(e)
    }
    
})

const upload = multer({
    limits:{
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpeg|jpg|png)$/)){
            cb(new Error('PLease upload image file with format jpeg | jpg | png'))
        }
        cb(undefined,true)
    }
})

router.post('/users/me/avatar', auth, upload.single('avatar') ,async (req,res) => {
    const buffer = await sharp(req.file.buffer).resize({ width:250, height:250 }).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
},(error, req, res, next) => {
    res.status(400).send({ error: error.message })
})

router.delete('/users/me/avatar', auth, async (req, res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
})

router.get('/users/:id/avatar', async (req,res) => {
    try{
        const user = await User.findById(req.params.id)

        if(!user || !user.avatar){
            throw new Error()
        }

        res.set('Content-Type','image/png')
        res.send(user.avatar)

    } catch (e) {
        res.status(404).send()
    }
})

router.get('/users/:id',async (req,res) => {
    const _id = req.params.id
    
    try{
        const user = await User.findById(_id)
        if(!user){
            return res.status(404).send()
        }
        res.send(user)
    } catch(e) {
        res.send(e)
    }

    // User.findById(_id).then((u) => {
    //     if(!u){
    //         return res.status(404).send()
    //     }
    //     res.send(u)
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

router.patch('/users/me', auth, async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update)) 
    // every returns true if every return value is true

    if(!isValidOperation){
        return res.status(400).send({ error: 'Invalid Updates!' })
    }

    try{
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)

    } catch(e) {
        res.status(400).send(e)
    }
})

router.delete('/users/me', auth, async (req,res) => {
    try{
        await req.user.remove()
        res.send(req.user)
    }catch(e){
        res.status(400).send(e)
    }
})


module.exports = router