const express = require('express');
const mongoose = require("mongoose");
const Admin = require('./Admin');
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
            app.get('/Admin', async(req,res)=>{
                // Admin.find().then((resData)=>{
                //     res.send(resData);
                // })
                try{
                    const AdminData = await Admin.find();
                    res.send(AdminData);
                    console.log("Get All");
                    
                }
                catch(error){
                    console.log("error")
                    console.log(error);

                }
                
            })

            //GET BY ID
            app.get('/Admin/:id', async(req,res)=>{
                try{
                    const AdminData = await Admin.findById(req.params.id);
                    res.send(AdminData);
                    console.log("Get by id")
                }
                catch(error){
                    console.log(error);
                }
                
            })

            //DELETE BY ID 
            app.delete('/Admin/:id', async(req,res)=>{
                try{
                    const AdminData = await Admin.findById(req.params.id);
                    await AdminData.deleteOne();
                    res.send(AdminData);
                    console.log("DELETE METHOD");
                }
                catch(error){
                    console.log(error);
                }
               
            })
            //Add new Admin Fo
            //ADD NEW
            app.post('/Admin',async(req,res) => {
                try{
                    const Admind = new Admin({
                        _id : new mongoose.Types.ObjectId(), ...req.body
                    });
                    await Admind.save();
                    res.send(Admind);
                    console.log("POST METHOD");
                }
                catch(error){
                    console.log(error);
                }
               
            })

            //EDIT 
            app.patch('/Admin/:id',async(req,res) => {
                console.log(req.body)
               try{
                const Admind= await Admin.findByIdAndUpdate(req.params.id , req.body, {new :true})
           
                await Admind.save();
                res.send(Admind);
                console.log("PATCH METHOD");  
               }
               catch(error){
                console.log(error);
               }
            })

            app.listen(4000,()=> {
                console.log("server Started");
            })
    });








    