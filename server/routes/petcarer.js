const express = require('express')
const PetCarer = require('../models/petcarer')
const sharp  = require('sharp')
const router = new express.Router()
const carerAuth = require('../middleware/carerAuth')
const auth = require('../middleware/auth')
const multer = require('multer')

// petcarer authentication
router.post('/petcarer/signup', async (req,res) => {
    const petcarer = new PetCarer(req.body)

    try{
        await petcarer.save()
        const token = await petcarer.generateAuthToken()
        res.status(201).send({ petcarer, token })
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/petcarers/login', async (req,res) => {
    try{
        const petcarer = await PetCarer.findByCredentials(req.body.email, req.body.password)
        const token = await petcarer.generateAuthToken()
        res.send({petcarer,token})
    } catch(e) {
        res.status(400).send(e)
    }
})

router.post('/petcarers/logout', carerAuth, async(req,res) => {
    try{
        req.petcarer.tokens = req.petcarer.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.petcarer.save()
        res.send()
    } catch(e){
        res.status(500).send()
    }
})

router.post('/petcarers/logoutAll', carerAuth, async (req, res) => {
    try{
        req.petcarer.tokens = []
        await req.petcarer.save()

        res.send()
    } catch(e) {
        res.status(500).send()
    }
})

// petcarer details

router.get('/petcarers',auth, async (req,res) => {
    try{
        const petcarers = await PetCarer.find({})
        console.log(petcarers)
        res.status(200).send(petcarers)
    } catch(e) {
        res.status(500).send(e)
    }
    res.send(req.petcarer)
})

router.get('/petcarers/me',carerAuth, async (req,res) => {
    res.send(req.petcarer)
})

// const upload = multer({
//     limits:{
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb){
//         if(!file.originalname.match(/\.(jpeg|jpg|png)$/)){
//             cb(new Error('PLease upload image file with format jpeg | jpg | png'))
//         }
//         cb(undefined,true)
//     }
// })

// router.post('/users/me/avatar', auth, upload.single('avatar') ,async (req,res) => {
//     const buffer = await sharp(req.file.buffer).resize({ width:250, height:250 }).png().toBuffer()
//     req.user.avatar = buffer
//     await req.user.save()
//     res.send()
// },(error, req, res, next) => {
//     res.status(400).send({ error: error.message })
// })

// router.delete('/users/me/avatar', auth, async (req, res) => {
//     req.user.avatar = undefined
//     await req.user.save()
//     res.send()
// })

// router.get('/users/:id/avatar', async (req,res) => {
//     try{
//         const user = await User.findById(req.params.id)

//         if(!user || !user.avatar){
//             throw new Error()
//         }

//         res.set('Content-Type','image/png')
//         res.send(user.avatar)

//     } catch (e) {
//         res.status(404).send()
//     }
// })

// router.get('/users/:id',async (req,res) => {
//     const _id = req.params.id
    
//     try{
//         const user = await User.findById(_id)
//         if(!user){
//             return res.status(404).send()
//         }
//         res.send(user)
//     } catch(e) {
//         res.send(e)
//     }

//     // User.findById(_id).then((u) => {
//     //     if(!u){
//     //         return res.status(404).send()
//     //     }
//     //     res.send(u)
//     // }).catch((e)=>{
//     //     res.status(500).send()
//     // })
// })

// router.patch('/users/me', auth, async (req,res) => {
//     const updates = Object.keys(req.body)
//     const allowedUpdates = ['name', 'email', 'password', 'age']
//     const isValidOperation = updates.every((update) => allowedUpdates.includes(update)) 
//     // every returns true if every return value is true

//     if(!isValidOperation){
//         return res.status(400).send({ error: 'Invalid Updates!' })
//     }

//     try{
//         updates.forEach((update) => req.user[update] = req.body[update])
//         await req.user.save()
//         res.send(req.user)

//     } catch(e) {
//         res.status(400).send(e)
//     }
// })

// router.delete('/users/me', auth, async (req,res) => {
//     try{
//         await req.user.remove()
//         res.send(req.user)
//     }catch(e){
//         res.status(400).send(e)
//     }
// })


module.exports = router