const mongoose =require('mongoose');

const schema = mongoose.Schema({
    
    aname:String,
    agstno:String,
    amail:String,
    apass:String,
    
    
});
module.exports= new mongoose.model('Admin',schema);