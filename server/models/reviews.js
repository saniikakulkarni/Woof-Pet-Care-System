const mongoose = require('mongoose')
const validator = require('validator')

const reviewSchema = new mongoose.Schema({
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
    rating:{
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    comments:{
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