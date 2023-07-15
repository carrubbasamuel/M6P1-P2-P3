const mongoose = require('mongoose');

const SchemaPost = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: false,
    },
    cover: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
},{ timestamps: true, strict: true });

module.exports = mongoose.model('Post', SchemaPost, 'posts');