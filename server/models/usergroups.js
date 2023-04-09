const mongoose  = require('mongoose');

const usergroup = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    groupId:{
        type: String,
        required: true
    }
},
{
    timestamps: {
        createdAt: 'created_at'
    }
})
module.exports = mongoose.model('usergrops',usergroup);