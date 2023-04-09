const mongoose  = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    dp:{
        type:String
    },
    eventtype:{
        type: String,
        required: true
    },
    des: {
        type: String,
        required: true
    },
    admin: {
        type: String,
        require: true
    },
    orgId:{
        type: String,
        required: true
    },
    isCompany:{
        type: Boolean,
        required: true
    },
    eventdate:{
        type: String,
        required: true
    },
    links:{
        type: [{
            des: {type: String},
            link: {type: String}
        }]
    },
    interest: {
        type: [String]
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})
module.exports = mongoose.model('event',eventSchema);