const mongoose = require('mongoose')

const ActorSchema = new mongoose.Schema({
    Name:{
        type: String,
        //required: [true, 'Please enter a Name']
    },
    Notes:{
        type: String,
        //required: [true, 'Please enter a Note']
    },
    // Poster:[
    //     {
    //         public_id: {
    //             type: String,
    //             required: true
    //         },
    //         url: {
    //             type: String,
    //             required: false
    //         }
    //     }
    // ],
    // Reviews : [
    //     {
    //         user: {
    //             type: mongoose.Schema.ObjectId,
    //             ref: 'User',
    //             required: true
    //         },
    //         name: {
    //             type: String,
    //             required: true
    //         },
    //         rating: {
    //             type: Number,
    //             required: true
    //         },
    //         comment: {
    //             type: String,
    //             required: true
    //         }
    //     }
    // ],
    // created_at : {
    //     type : Date,
    //     default : Date.now
    // }
})

module.exports = mongoose.model("Actor",ActorSchema);