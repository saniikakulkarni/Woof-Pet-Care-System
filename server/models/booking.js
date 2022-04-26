const mongoose = require('mongoose')
const validator = require('validator')

const reviewSchema = new mongoose.Schema({
    userId:{
       type: mongoose.ObjectId,
       required: true,
    },
    petCarerId:{
       type: mongoose.ObjectId,
       required: true,
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

// reviewSchema.virtual('tasks', {
//     ref: 'Task',
//     localField: '_id',
//     foreignField: 'owner'
// })

// reviewSchema.pre('remove', async function(next){
//     const user = this
//     await Task.deleteMany({ owner:user._id })
//     next()
// })

const Review = new mongoose.model('Review', reviewSchema)

module.exports = Review