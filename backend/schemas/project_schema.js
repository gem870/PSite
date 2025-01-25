const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Project Schema for MongoDB
const project_schema = new schema({
    title: {
        type: String
    },
    description: {  
        type: String
    },
    mediaType: {
        type: String,
        enum: ['image', 'video'],
    },
    url: {
        type: String
    },
    file: {  
        type: String
    }
}, { timestamps: true });

module.exports = mongoose.model('PROJECT_SCHEMA', project_schema);
