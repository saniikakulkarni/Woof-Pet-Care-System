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
    rating:{
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    reviews:{
       type: String,
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