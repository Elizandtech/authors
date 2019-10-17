const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Must include a name"], minlength: [3, "Name must be at least 3 characters"]},
    quote: {type: String, required: [ true, "Must have a quote"], minlength: [3, "Quotes are at least 3 characters"]}
}, {timestamps:true});
// AuthorSchema.plugin(uniqueValidator);
// unique: true
mongoose.model('Author', AuthorSchema);