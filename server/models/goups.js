const mongoose  = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dp:{
        type:String,
        required:true
    },
    des: {
        type: String,
        required: true
    },
    admin: {
        type: [String],
        require: true
    },
    email:{
        type:String,
        required: true
    },
    members:{
        type: Number,
        required: true
    },
    orgId:{
        type:String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    interest: {
        type: [String],
        require: true
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('group',groupSchema);