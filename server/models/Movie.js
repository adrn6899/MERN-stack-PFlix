const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    Title:{
        type: String,
        required: [true, 'Please enter an acceptable Title']
    },
    date_released : {
        type : Date,
        default : Date.now
    },
    RunTime:{
        type: Number,
        required: [true,'Please enter movie time duration']
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
    Plot:{
        type: String,
        required: [true,'Please indicate a plot'],
    },
    actors : [
        {
            user : {
                type : mongoose.Schema.ObjectId,
                ref : 'Actor',
                required : [true, 'No movie has no actors']
            }
        }
    ],
    Producer: {
        type : mongoose.Schema.ObjectId,
        ref : 'Producer',
        required : true
    },
    genre : {
        type: String,
        required: [true, 'Please select genre for this movie'],
        enum: {
            values: [
                'Horror',
                'Sci-Fi',
                'Drama',
                'Comedy',
                'War',
                'Sports',
                'Crime',
                'Action',
                'Musicals',
                'Romance',
            ],
            message: 'Please select correct genre for this movie'
        }
    },
    reviews : [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required: true
            },
            name: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    created_at : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Movie',MovieSchema);