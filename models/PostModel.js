const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({

    title: {
        type: String,
        requried: true
    },

    status: {
        type: String,
        default: 'public'
    },

    description: {
        type: String,
        requried: true
    },

    creationdate: {
        type: Date,
        default: Date.now()
    }




});