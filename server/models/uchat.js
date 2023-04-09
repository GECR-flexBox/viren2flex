const mongoose  = require('mongoose');

const uchatSchema = new mongoose.Schema({
    senderId:{
        type:String,
        required:true,
    },
    recId:{
        type:String,
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
module.exports = mongoose.model('uchat',uchatSchema);