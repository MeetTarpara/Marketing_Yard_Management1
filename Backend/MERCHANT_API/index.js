const express = require('express');
const mongoose = require("mongoose");
const Merchant = require('./Merchant');
const bodyParser = require("body-parser");
const cors = require("cors");

mongoose
    .connect("mongodb://localhost:27017/YARD",{useNewUrlParser:true})//,{useNewUrlParser:true}
    .then(()=>{
            console.log("connected");
            const express = require('express');
            const app = express();
            app.use(express.json());
            app.use(bodyParser.urlencoded({extended:false}))
            app.use(cors());

            //GET ALL
            app.get('/merchant', async(req,res)=>{
                // Farmer.find().then((resData)=>{
                //     res.send(resData);
                // })
                try{
                    const merchantData = await Merchant.find();
                    res.send(merchantData);
                    console.log("Get All");
                    
                }
                catch(error){
                    console.log("error")
                    console.log(error);

                }
                
            })

            //GET BY ID
            app.get('/merchant/:id', async(req,res)=>{
                try{
                    const merchantData = await Merchant.findById(req.params.id);
                    res.send(merchantData);
                    console.log("Get by id")
                }
                catch(error){
                    console.log(error);
                }
                
            })

            //DELETE BY ID 
            app.delete('/merchant/:id', async(req,res)=>{
                try{
                    const merchantData = await Merchant.findById(req.params.id);
                    await merchantData.deleteOne();
                    res.send(merchantData);
                    console.log("DELETE METHOD");
                }
                catch(error){
                    console.log(error);
                }
               
            })
            //Add new Farmer Fo
            //ADD NEW
            app.post('/merchant',async(req,res) => {
                try{
                    const merchant = new Merchant({
                        _id : new mongoose.Types.ObjectId(),
                        mname: req.body.mname,
                        aid: req.body.aid,
                        mage: req.body.mage,
                        mavatar: req.body.mavatar,
                        mpass:req.body.mpass,
                        mfrom:req.body.mfrom,
                        mid:req.body.mid
                    });
                    await merchant.save();
                    res.send(merchant);
                    console.log("POST METHOD");
                }
                catch(error){
                    console.log(error);
                }
               
            })

            //EDIT 
            app.patch('/merchant/:id',async(req,res) => {
                console.log(req.body)
               try{
                const merchant= await Merchant.findById(req.params.id)           
                merchant.mname= req.body.mname,
                merchant.aid=req.body.aid,
                merchant.mage= req.body.mage,
                merchant.mavatar= req.body.mavatar,
                merchant.mpass=req.body.mpass,
                merchant.mfrom=req.body.mfrom,
                merchant.mid=req.body.mid
           
                await merchant.save();
                res.send(merchant);
                console.log("PATCH METHOD");  
               }
               catch(error){
                console.log(error);
               }
            })

            app.listen(4002,()=> {
                console.log("server Started");
            })
    });








    