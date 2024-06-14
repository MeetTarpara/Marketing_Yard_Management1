import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const AddMerchant = () => {
    var [merchant,setMerchant]=useState({});
    var params=useParams();
    const nav = useNavigate();

    function add1(){
        merchant.aid = localStorage.getItem("AdminId");
        axios.post(`http://localhost:4002/merchant`,merchant)
        .then(()=>{
            console.log("ADD....")
        nav('../../home/merchant')});
    }
    // function add1(){
    //     axios.post(`http://localhost:4002/merchant`,merchant)
    //     .then(()=>{
    //         console.log("add")})
    //     nav('../../home/merchant')
    //     }
       
    // }

  return (
    <div>
       <div>
        <div className='Rform'>
                

                <div class="title">
                    <p>Add Merchant</p>
                </div>

                <div class="r_form">
                    <form>
                    <div class="input_wrap p-2">
                            <label for="yourname"style={{display:"block",fontSize:15}}>Merchant Id: </label>
                            <input type="text" style={{width:"100%" ,height:35, border:"none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8  }} name="studentName" class="input" id="yourId" value={merchant.mid} onChange={(e)=>{setMerchant({...merchant,mid:e.target.value})}}/>
                        </div>
                        <div class="input_wrap p-2">
                            <label for="yourname"style={{display:"block",fontSize:15}}>Merchant Name : </label>
                            <input type="text" style={{width:"100%" ,height:35,border:"none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8 }} name="studentName" class="input" id="yourname" value={merchant.mname}  onChange={(e)=>{setMerchant({...merchant,mname:e.target.value})}}  />
                        </div>
                        <div class="input_wrap p-2">
                            <label for="emailaddress"style={{display:"block",fontSize:15}}>Merchant Age :</label>
                            <input type="number" style={{width:"100%" ,height:35,border:"none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8 }} name="studentEmail" class="input" id="emailaddress" value={merchant.mage}  onChange={(e)=>{setMerchant({...merchant,mage:e.target.value})}}/>
                        </div>
                        <div class="input_wrap p-2">
                            <label for="collagename"style={{display:"block",fontSize:15}}>Merchant Photo :</label>
                            <input type="text" style={{width:"100%" ,height:35,border:"none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8 }} name="studentCollage" class="input" id="collagename" value={merchant.mavatar}  onChange={(e)=>{setMerchant({...merchant,mavatar:e.target.value})}}/>
                        </div>
                        <div class="input_wrap p-2">
                            <label for="enrollno" style={{display:"block"}}>Merchant Password: </label>
                            <input type="String" style={{width:"100%" ,height:35,border:"none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8 }} name="studentEnrollment" class="input" id="enrollno" value={merchant.mpass}  onChange={(e)=>{setMerchant({...merchant,mpass:e.target.value})}}/>
                        </div>
                        
                        <div class="input_wrap p-2">
                            <label for="address"style={{display:"block",fontSize:15}}>Merchant Village : </label>
                            <input type="text" style={{width:"100%" ,height:35,border:"none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8 }} name="address" class="input" id="address" value={merchant.mfrom}  onChange={(e)=>{setMerchant({...merchant,mfrom:e.target.value})}} />
                        </div>
                     
                    </form>
         
        </div>
        
        <button className='btn btn-success' style={{display:"block",marginInline:"auto"}}  onClick={add1}> Register</button>
        
    </div>
    </div>
    </div>
  )
}

export default AddMerchant
