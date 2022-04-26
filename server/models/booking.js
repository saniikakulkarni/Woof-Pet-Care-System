const mongoose = require('mongoose')
const validator = require('validator')

const bookingSchema = new mongoose.Schema({
    userId:{
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'User'
    },
    petCarerId:{
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: 'PetCarer'
    },
    startDate:{
        type: Date,
        required: true,
    },
    endDate:{
        type: Date,
        required: true,
    },
    totalCost:{
        type: Number,
        required: true,
        validate(value){
            if(value<0){
                throw new Error('Number should be greater than 0')
            }
        }
    }
}, {
    timestamps:true
})

const Booking = new mongoose.model('Booking', bookingSchema)

module.exports = Booking