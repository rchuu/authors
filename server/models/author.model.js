const mongoose = require('mongoose');
const AuthorSchema = new mongoose.schema({
    name: { type: String },
}, { timestamps: true });
module.exports.Author = mongoose.model('Author', AuthorSchema);