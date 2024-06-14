import "./AddBill1.css";
import React from 'react'
import {useEffect, useState } from 'react';

import { useNavigate,useParams,Link,Outlet } from 'react-router-dom';
import axios from 'axios';

const AddBill1 = () => {


    const apiUrl='http://localhost:4001/farmer';
    const [data,setData]=useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res))
    },[])


    const formattedData=data.map((farmer)=>{
        if(farmer.aid===localStorage.getItem('AdminId')){
        return(  
        
        <div className="col-4 p-2 ">
            <div class="card mainCstCard rounded-3 p-1"style={{ border: '2px solid rgb(11, 35, 83)' }} >
                <div class="card-body p-2">
                    <h5 class="card-title fs-5 fw-bold pb-2">Farmer Name : {farmer.fname}</h5>
                    <h6 class="card-subtitle fw-bold fs-6 mb-2 text-dark">Village : {farmer.ffrom}</h6>
                    <p class="card-text">Age : {farmer.fage}</p>
                    <Link className="card-link text-dark" to={"/home/farmer/detail/" + farmer._id} onClick={() => {
                         console.log("figifdhg id =", farmer._id)
                         localStorage.setItem("farmer_id", farmer._id);
                     }}>More Details</Link>
                   
                    <div className="row">
                        <div className="col-5">
                            <button className='btn btn-danger'  onClick={()=>{
                           axios.delete(`http://localhost:4001/farmer/${farmer._id}`)
                           .then(()=>{console.log("Delete Data");
                             window.location.reload();
                       });
                     }}>Delete</button>
                        </div>

                        <div className="col-7">
                        <button className='btn btn-success' onClick={()=>navigator(`/home/farmer/edit/${farmer._id}`)}>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
    )
        
                }
    })

    function add(){
        navigator('../farmer/add');
    }


    return (
<>
<div className="row titleCstAll p-2 mb-2 "style={{ borderBottom: '3px solid rgb(11, 35, 83)' }}  >
<div className='col fw-bold '>
            <span className='fs-1 text-center' style={{color:" #0b2353", fontFamily:'revert'}}>Farmer list</span>
        </div>
        <div className="col-2 ">
            <button className="btn btn-dark" style={{backgroundColor:" #0b2353"}} onClick={add}>Add</button>
        </div>
</div>
<div className="row p-2">
    {formattedData}
</div>
</>

  )
};

export default AddBill1;
