const mongoose = require('mongoose');
const schema=mongoose.Schema({
        aid:String,
        bdate : Date,
        cname : String,
        cid : Number,
        mname : String,
        mid : String,
        fname : String,
        fid : String,
        iname : String,
        priceof20 : Number,
        quantity : Number,
        total : Number,
        status : String,
        bid : Number
})
module.exports = new mongoose.model('Bill',schema);