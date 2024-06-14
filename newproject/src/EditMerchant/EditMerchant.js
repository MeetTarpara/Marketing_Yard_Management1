import React, { useEffect, useState } from 'react'
import '../EditFarmer/EditFarmer.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditMerchant = () => {
    var [merchant,setMerchant]=useState({});
    var params=useParams();
    const nav = useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:4002/merchant/${params.id}`)
        .then(res=>res.json())
        .then(res=>setMerchant(res));
    },[])
    function edited() {
        // console.log(farmer)
        axios.patch(`http://localhost:4002/merchant/${params.id}`,merchant)
        .then(()=>{console.log("Edited Data");
    nav('../../home/merchant')});
    }

    return (
        <div>
           <div>
            <div className='Rform'>
                    
    
                    <div class="title">
                        <p>Registration Form</p>
                    </div>
    
                    <div class="r_form">
                        <form>
                        <div class="input_wrap p-2">
                                <label for="yourname"style={{display:"block",fontSize:15}}>Merchant Id: </label>
                                <input type="text" style={{width:"100%" ,height:35,border:"none"}} name="studentName" class="input" id="yourId" value={merchant.mid} onChange={(e)=>{setMerchant({...merchant,mid:e.target.value})}}/>
                            </div>
                            <div class="input_wrap p-2">
                                <label for="yourname"style={{display:"block",fontSize:15}}>Merchant Name : </label>
                                <input type="text" style={{width:"100%" ,height:35,border:"none"}} name="studentName" class="input" id="yourname" value={merchant.mname}  onChange={(e)=>{setMerchant({...merchant,mname:e.target.value})}}  />
                            </div>
                            <div class="input_wrap p-2">
                                <label for="emailaddress"style={{display:"block",fontSize:15}}>Merchant Age :</label>
                                <input type="number" style={{width:"100%" ,height:35,border:"none"}} name="studentEmail" class="input" id="emailaddress" value={merchant.mage}  onChange={(e)=>{setMerchant({...merchant,mage:e.target.value})}}/>
                            </div>
                            <div class="input_wrap p-2">
                                <label for="collagename"style={{display:"block",fontSize:15}}>Merchant Photo :</label>
                                <input type="text" style={{width:"100%" ,height:35,border:"none"}} name="studentCollage" class="input" id="collagename" value={merchant.mavatar}  onChange={(e)=>{setMerchant({...merchant,mavatar:e.target.value})}}/>
                            </div>
                            <div class="input_wrap p-2">
                                <label for="enrollno" style={{display:"block"}}>Merchant Password: </label>
                                <input type="String" style={{width:"100%" ,height:35,border:"none"}} name="studentEnrollment" class="input" id="enrollno" value={merchant.mpass}  onChange={(e)=>{setMerchant({...merchant,mpass:e.target.value})}}/>
                            </div>
                            
                            <div class="input_wrap p-2">
                                <label for="address"style={{display:"block",fontSize:15}}>Merchant Village : </label>
                                <input type="text" style={{width:"100%" ,height:35,border:"none"}} name="address" class="input" id="address" value={merchant.mfrom}  onChange={(e)=>{setMerchant({...merchant,mfrom:e.target.value})}} />
                            </div>
                         
                        </form>
             
            </div>
            
            <button className='btn btn-success' style={{display:"block",marginInline:"auto"}}  onClick={edited}> Register</button>
            
        </div>
        </div>
        </div>
      )
}

export default EditMerchant
