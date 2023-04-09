const mongoose  = require('mongoose');

const orgSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dp:{
        type:String
    },
    des: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    members:{
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('org',orgSchema);