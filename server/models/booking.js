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
    },
    user:[{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref:'User' 
    }],
    petcarer:[{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref:'PetCarer' 
    }]
}, {
    timestamps:true
})

// bookingSchema.virtual('petcarers', {
//     ref: 'PetCarer',
//     localField: 'petCarerId',
//     foreignField: '_id'
// })

// bookingSchema.virtual('users', {
//     ref: 'User',
//     localField: 'userId',
//     foreignField: '_id'
// })

const Booking = new mongoose.model('Booking', bookingSchema)

module.exports = Booking