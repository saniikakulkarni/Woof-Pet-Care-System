const mongoose = require('mongoose')
const validator = require('validator')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const data = require('../helpers/defaultProfile')

const userSchema = new mongoose.Schema({
    name:{
       type: String,
       required: true,
       trim: true
    },
    email:{
       type: String,
       required: true,
       unique: true,
       trim: true,
       lowercase: true,
       validate(value){
           if(!validator.isEmail(value)){
               throw new Error('Incorrect Email id')
           }
       }
    },
    password:{
        type: String,
        required: true,
        trim:true,
        minLength: 6,
        validate(value){
            if(value.toLowerCase().includes("password")){
                throw new Error('Password cannot have word password')
            }
        }
    },
    age:{
       type: Number,
       default:0,
       validate(value){
           if(value<0){
               throw new Error('Number should be greater than 0')
           }
       }
    },
    mobileNumber:{
        type: String,
        required: true,
        unique: true,
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error('Incorrect Mobile Number')
            }
        }
    }, 
    address: {
        type: String,
        required: true,
    }, 
    petName:{
        type: String,
        required: true,
        min:3
    }, 
    petBreed:{
        type: String,
        required: true,
    }, 
    petLikes:{
        type: String,
    }, 
    petDislikes:{
        type: String,
    }, 
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }],
    avatar:{
        type:Buffer,
    }
}, {
    timestamps:true
})

userSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens

    return userObject
}

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({ _id:user.id.toString() }, "thisismynewcourse")
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })
    
    if(!user){
        throw 'User not found'
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw 'Wrong password'
    }

     return user
}

userSchema.pre('save', async function(next){
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password,8)
    }
    next()
})

userSchema.pre('remove', async function(next){
    const user = this
    await Booking.deleteMany({ owner:user._id })
    await Review.deleteMany({ owner:user._id })
    next()
})

const User = new mongoose.model('User', userSchema)

module.exports = User