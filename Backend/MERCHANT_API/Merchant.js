const mongoose =require('mongoose');

const schema = mongoose.Schema({
    _id:mongoose.ObjectId,
    aid:String,
    mname:String,
    mage:Number,
    mavatar:String,
    mpass:String,
    mfrom:String,
    mid:Number
});
module.exports= new mongoose.model('Merchant',schema);