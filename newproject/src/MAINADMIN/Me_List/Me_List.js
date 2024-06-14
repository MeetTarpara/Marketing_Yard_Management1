import React from 'react'
import {useEffect, useState } from 'react';
// import './Farmerlist.css';
import { useNavigate,useParams,Link,Outlet } from 'react-router-dom';
import axios from 'axios';
// import i2 from './img/list.png'
import del from '../../img/delete.png'
import edit from '../../img/edit.png'


const Me_List = () => {


    

    const apiUrl='http://localhost:4000/admin';
    const [data,setData]=useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res))
    },[])


    const formattedData=data.map((admin)=>{
       
        return(  
        
            <tr className='p-1 fs-5 text-center'>
                    <td scope="row">{admin.aname}</td>
                    <td>{admin.amail}</td>
                    <td>{admin.apass}</td>
                    <td>{admin.agstno}</td>
                    <td><button  style={{backgroundColor:"#CADCFC",borderRadius:7,border:'none'}}onClick={()=>
                        navigator(`/Me/List/Edit/${admin._id}`)}>
                        <img className="icon"style={{height:30,width:30}} src={edit} alt="Farmer Icon" />
                        </button></td>
                    <td><button  style={{backgroundColor:"#CADCFC",borderRadius:7,border:'none'}} onClick={()=>{
                          axios.delete(`http://localhost:4000/admin/${admin._id}`)
                          .then(()=>{console.log("Delete Data");
                            window.location.reload();
                      });
                    }}><img className="icon"style={{height:30,width:30}} src={del} alt="Farmer Icon" /></button></td>
                 
            </tr>
        
        )
                }
    )

    function add(){
        navigator('../../Me/AddCompany');
    }

   

  return (
   
        <div className="container text-center" >
        <div className='head' style={{ display: 'flex', alignItems: 'center'}}>
            <div className='he1 mt-3'>
                <img style={{ height: 45, width: 45 }} src="https://cdn-icons-png.flaticon.com/128/839/839860.png" />
            </div>
            <div>
                <h1 style={{fontFamily:'revert'}}>Company list</h1>
            </div>
            <div className='btn btn-info' style={{ backgroundColor: " #0b2353", color:"white",marginLeft:"auto" }} onClick={add}>
                Add
            </div>
        </div>
    
    <table className="table table-striped mt-3">
        <thead className='fs-4 m-4'  >
            <tr>
                <th scope="col">Company Name</th>
                <th scope="col">Mail</th>
                <th scope="col">Password</th>
                <th scope="col">GST NO</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
            </tr>
        </thead>
        <tbody>
            {formattedData}
        </tbody>
    </table>
</div>

  )
}

export default Me_List;

