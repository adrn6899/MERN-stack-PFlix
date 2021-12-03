const mongoose = require('mongoose')

const ProducerSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: [true, 'Please enter a Name']
    },
    Poster:[
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
})

module.exports - mongoose.model('Producer',ProducerSchema);