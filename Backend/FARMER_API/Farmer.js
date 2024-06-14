const mongoose =require('mongoose');

const schema = mongoose.Schema({
    _id:mongoose.ObjectId,
    aid:String,
    fname:String,
    fage:Number,
    favatar:String,
    fpass:String,
    ffrom:String,
    fid:Number
});
module.exports= new mongoose.model('Farmer',schema);