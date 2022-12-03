const { Schema, model } = require('mongoose');

const BookSchema = Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    editorial: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    read: {
        type: Boolean,
        required: false
    }
});

BookSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

module.exports = model('Book', BookSchema);