import React, { useEffect, useState } from 'react'
import './EditFarmer.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditFarmer = () => {
    var [farmer,setFarmer]=useState({});
    var params=useParams();
    const nav = useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:4001/farmer/${params.id}`)
        .then(res=>res.json())
        .then(res=>setFarmer(res));
    },[])
    function edited() {
        console.log(farmer)
        axios.patch(`http://localhost:4001/farmer/${params.id}`,farmer)
        .then(()=>{console.log("Edited Data");
    nav('../../home/farmer')});
    }

  return (
    <div>
        <div className='Rform'>
                

                <div class="title">
                    <p>Registration Form</p>
                </div>

                <div class="r_form">
                    <form>
                    <div class="input_wrap p-2">
                            <label for="yourname"style={{display:"block",fontSize:15}}>Farmer Id: </label>
                            <input type="text" style={{width:"100%" ,height:35,border:"none"}} name="studentName" class="input" id="yourId" value={farmer.fid} onChange={(e)=>{setFarmer({...farmer,fid:e.target.value})}}/>
                        </div>
                        <div class="input_wrap p-2">
                            <label for="yourname"style={{display:"block",fontSize:15}}>Farmer Name : </label>
                            <input type="text" style={{width:"100%" ,height:35,border:"none"}} name="studentName" class="input" id="yourname" value={farmer.fname}  onChange={(e)=>{setFarmer({...farmer,fname:e.target.value})}}  />
                        </div>
                        <div class="input_wrap p-2">
                            <label for="emailaddress"style={{display:"block",fontSize:15}}>Farmer Age :</label>
                            <input type="number" style={{width:"100%" ,height:35,border:"none"}} name="studentEmail" class="input" id="emailaddress" value={farmer.fage}  onChange={(e)=>{setFarmer({...farmer,fage:e.target.value})}}/>
                        </div>
                        <div class="input_wrap p-2">
                            <label for="collagename"style={{display:"block",fontSize:15}}>Farmer Photo :</label>
                            <input type="text" style={{width:"100%" ,height:35,border:"none"}} name="studentCollage" class="input" id="collagename" value={farmer.favatar}  onChange={(e)=>{setFarmer({...farmer,favatar:e.target.value})}}/>
                        </div>
                        <div class="input_wrap p-2">
                            <label for="enrollno" style={{display:"block"}}>Farmer Password: </label>
                            <input type="String" style={{width:"100%" ,height:35,border:"none"}} name="studentEnrollment" class="input" id="enrollno" value={farmer.fpass}  onChange={(e)=>{setFarmer({...farmer,fpass:e.target.value})}}/>
                        </div>
                        
                        <div class="input_wrap p-2">
                            <label for="address"style={{display:"block",fontSize:15}}>Farmer Village : </label>
                            <input type="text" style={{width:"100%" ,height:35,border:"none"}} name="address" class="input" id="address" value={farmer.ffrom}  onChange={(e)=>{setFarmer({...farmer,ffrom:e.target.value})}} />
                        </div>
                     
                    </form>
         
        </div>
        
        <button className='btn btn-success' style={{display:"block",marginInline:"auto"}} onClick={edited} > Register</button>
        
    </div>
    </div>
  )
}

export default EditFarmer
