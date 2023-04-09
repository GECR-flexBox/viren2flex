const mongoose  = require('mongoose');

const gchatSchema = new mongoose.Schema({
    groupId:{
        type:String,
        required:true
    },
    senderId:{
        type: String,
        required:true
    },
    message: {
        type:String
    },
    isMedia: {
        type: Number,
        required: true
    },
    media:{
        type: String
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('gchat',gchatSchema);