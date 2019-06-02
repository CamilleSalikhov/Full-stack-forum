const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema

const ItemSchema = new Schema({
    title: String,
    body: String
});  
module.exports = Item = mongoose.model('item', ItemSchema);