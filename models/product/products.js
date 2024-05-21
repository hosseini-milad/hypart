const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const ProductSchema = new Schema({
    title:  { type: String},
    mid: { type: String , unique: true},
    enTitle:String,
    description:String,
    code:{ type: String , unique: true},
    brand:Object,
    filters:{type:Object,default:{}},
    uploadImage:String,
    imageUrl: {
        type:String
    },
    thumbUrl: {
        type:String
    },
    perBox:Number,
    prices:Array,
    quantities:Array,
    category:Object,
    active:Boolean
})
module.exports = mongoose.model('product',ProductSchema);