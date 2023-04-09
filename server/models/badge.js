const mongoose  = require('mongoose');

const badgeSchema = new mongoose.Schema({
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
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('badge',badgeSchema);