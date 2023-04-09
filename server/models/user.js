// create user model
const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true,
    },
    dp:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isMentor: {
        type: Boolean,
        required: true,
    },
    orgId:{
        type: String,
        required: true
    },  
    interest: {
        type: [String],
        require: true
    },
    points:{
        type: Number,
        required: true
    },
    badges:{
        type: [String],
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('user',userSchema);
