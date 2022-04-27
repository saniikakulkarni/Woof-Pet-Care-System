const express = require('express')
const router = new express.Router()

const PetCarer = require('../models/petcarer')
const Booking = require('../models/booking')
const auth = require('../middleware/auth')

router.post('/booking/:id', auth,async (req,res) => {
    const carerId = req.params.id
    const booking = new Booking({
        ...req.body,
        userId: req.user._id,
        petCarerId: carerId
    })

    try{
        await booking.save()
        res.status(201).send(booking)
    } catch(e) {
        res.status(400).send(e)
    }
})

// route to get user history

// route to show bookig details to petcarer

module.exports = router