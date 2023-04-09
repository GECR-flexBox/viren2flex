const mongoose  = require('mongoose');

const companySchema = new mongoose.Schema({
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
    password: {
        type: String,
        required: true
    },
    requirement: {
        type: Number,
        required: true
    },
    orgId:{
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
module.exports = mongoose.model('company',companySchema);