const express = require('express');
const mongoose = require("mongoose");
const Farmer = require('./Farmer');
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
            app.get('/farmer', async(req,res)=>{
                // Farmer.find().then((resData)=>{
                //     res.send(resData);
                // })
                try{
                    const farmerData = await Farmer.find();
                    res.send(farmerData);
                    console.log("Get All");
                    
                }
                catch(error){
                    console.log("error")
                    console.log(error);

                }
                
            })

            //GET BY ID
            app.get('/farmer/:id', async(req,res)=>{
                try{
                    const farmerData = await Farmer.findById(req.params.id);
                    res.send(farmerData);
                    console.log("Get by id")
                }
                catch(error){
                    console.log(error);
                }
                
            })

            //DELETE BY ID 
            app.delete('/farmer/:id', async(req,res)=>{
                try{
                    const farmerData = await Farmer.findById(req.params.id);
                    await farmerData.deleteOne();
                    res.send(farmerData);
                    console.log("DELETE METHOD");
                }
                catch(error){
                    console.log(error);
                }
               
            })
            //Add new Farmer Fo
            //ADD NEW
            app.post('/farmer',async(req,res) => {
                try{
                    const farmer = new Farmer({
                        _id : new mongoose.Types.ObjectId(),
                        aid:req.body.aid,
                        fname: req.body.fname,
                        fage: req.body.fage,
                        favatar: req.body.favatar,
                        fpass:req.body.fpass,
                        ffrom:req.body.ffrom,
                        fid:req.body.fid
                    });
                    await farmer.save();
                    res.send(farmer);
                    console.log("POST METHOD");
                }
                catch(error){
                    console.log(error);
                }
               
            })

            //EDIT 
            app.patch('/farmer/:id',async(req,res) => {
                console.log(req.body)
               try{
                const farmer= await Farmer.findById(req.params.id)           
                farmer.fname= req.body.fname,
                farmer.aid = req.body.aid,
                farmer.fage= req.body.fage,
                farmer.favatar= req.body.favatar,
                farmer.fpass=req.body.fpass,
                farmer.ffrom=req.body.ffrom,
                farmer.fid=req.body.fid
           
                await farmer.save();
                res.send(farmer);
                console.log("PATCH METHOD");  
               }
               catch(error){
                console.log(error);
               }
            })

            app.listen(4001,()=> {
                console.log("server Started");
            })
    });








    