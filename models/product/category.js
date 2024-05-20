const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    title:  String, // String is shorthand for {type: String}
    mid: { type: String , unique: true},
    active:Boolean,
    parent: {type: String},
    date: { type: Date, default: Date.now }
    
})
module.exports = mongoose.model('categories',CategorySchema);