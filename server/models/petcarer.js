const mongoose = require('mongoose')
const validator = require('validator')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const pointSchema = new mongoose.Schema({
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
});

const petCarerSchema = new mongoose.Schema({
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
        validate(value){
            if(!validator.isMobilePhone(value)){
                throw new Error('Incorrect Mobile Number')
            }
        }
    },
    tokens:[{
        token:{
            type: String,
            required: true
        }
    }],
    experience:{
        type: Number,
        required: true,
        default:0,
        validate(value){
            if(value<0){
                throw new Error('Number should be greater than 0')
            }
        }
    },
    cost:{
        type: Number,
        required: true,
        validate(value){
            if(value<0){
                throw new Error('Number should be greater than 0')
            }
        }
    },
    address:{
        type: String,
        required:true,
    },
    avatar:{
        type:Buffer
    },
    aadharCard:{
        type: Buffer,
    },
    location:{
        type: pointSchema,
        required: true
    },
    availability:{
        type:String,
        default:"Available"
    }
}, {
    timestamps:true
})

// petCarerSchema.virtual('reviews', {
//     ref: 'Review',
//     localField: '_id',
//     foreignField: 'petCarerId'
// })

// petCarerSchema.virtual('bookings', {
//     ref: 'Booking',
//     localField: '_id',
//     foreignField: 'petCarerId'
// })

petCarerSchema.methods.toJSON = function(){
    const petcarer = this
    const petcarerObject = petcarer.toObject()

    delete petcarerObject.password
    delete petcarerObject.tokens

    return petcarerObject
}

petCarerSchema.methods.generateAuthToken = async function(){
    const petcarer = this
    const token = jwt.sign({ _id:petcarer.id.toString() }, "petcarersecret")
    petcarer.tokens = petcarer.tokens.concat({ token })
    await petcarer.save()
    return token
}

petCarerSchema.statics.findByCredentials = async (email, password) => {
    const petcarer = await PetCarer.findOne({ email })
    
    if(!petcarer){
        throw 'User not found'
    }

    const isMatch = await bcrypt.compare(password, petcarer.password)

    if(!isMatch){
        throw 'Wrong password'
    }

    return petcarer
}

petCarerSchema.pre('save', async function(next){
    const petcarer = this

    if(petcarer.isModified('password')){
        petcarer.password = await bcrypt.hash(petcarer.password,8)
    }
    next()
})

petCarerSchema.pre('remove', async function(next){
    const user = this
    await Booking.deleteMany({ owner:user._id })
    next()
})

const PetCarer = new mongoose.model('PetCarer', petCarerSchema)

module.exports = PetCarer