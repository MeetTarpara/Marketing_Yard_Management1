const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const Bill = require('./Bill');
const cors = require("cors");


mongoose
        .connect("mongodb://localhost:27017/YARD",{useNewUrlParser:true})
        .then(() => {
            console.log("connectd");
            const app = express();
        
            app.use(express.json());
            // app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({extended:false}));
            app.use(cors());   


            // GET ALL
            app.get('/bill',async(req,res)=>{
               try{
                const billData = await Bill.find();
                res.send(billData);
                console.log("GET ALL");
               }
               catch(error){
                console.log("Error");
                console.log(error);
               }
            })

            //GET BY ID
            app.get('/bill/:id',async(req,res) => {
                try{
                    const billData = await Bill.findById(req.params.id);
                    res.send(billData);
                }
               catch(error){
                console.log("ErROR>>>");
                console.log(error);
               }
            })

            //DELETE BY ID 
            app.delete('/bill/:id',async(req,res)=>{
                const billData = await Bill.findById(req.params.id);
                // if(!billData){

                // }
                await billData.deleteOne();
                res.send(billData)
            })
            
            //ADD NEW 
            app.post('/bill',async(req,res)=>{
                try{
                    const bill = new Bill({
                        _id : new mongoose.Types.ObjectId(),
                        aid: req.body.aid,
                        bdate : req.body.bdate,
                        cname : req.body.cname,
                        cid : req.body.cid,
                        mname : req.body.mname,
                        mid : req.body.mid,
                        fname : req.body.fname,
                        fid : req.body.fid,
                        iname : req.body.iname,
                        priceof20 :req.body.priceof20,
                        quantity : req.body.quantity,
                        total : req.body.total,
                        status : req.body.status,
                        bid : req.body.bid
                    });
                    // await bill.save();
                    // res.send(bill);
                    if(!bill){
                        res.status(404).send("data not found");
                    }
                    await bill.save();
                    res.status(200).send("bill added")
                }
                catch(error){
                    console.log(error);
                    res.status(500).send("Server issue");
                }
               
            })


            // EDIT
            app.patch('/bill/:id',async(req,res) => {
                const bill = await Bill.findById(req.params.id);
                        bill.bdate=req.body.bdate,
                        bill.aid=req.body.aid,
                        bill.cname=req.body.cname,
                        bill.cid=req.body.cid,
                        bill.mname=req.body.mname,
                        bill.mid=req.body.mid,
                        bill.fname=req.body.fname,
                        bill.fid=req.body.fid,
                        bill.iname=req.body.iname,
                        bill.priceof20=req.body.priceof20,
                        bill.quantity=req.body.quantity,
                        bill.total=req.body.total,
                        bill.status=req.body.status,
                        bill.bid=req.body.bid     
                await bill.save();
                res.send(bill);
            })
                                 
            app.listen(4003 ,()=>{
                console.log("server started");
            })
        })