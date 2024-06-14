import React from 'react'
import {useEffect, useState } from 'react';
import './Farmerlist.css';
import { useNavigate,useParams,Link,Outlet } from 'react-router-dom';
import axios from 'axios';
import i2 from './img/list.png'
import del from './img/delete.png'
import edit from './img/edit.png'

// const Farmerlist = () => {


    

//     const apiUrl='http://localhost:4001/farmer';
//     const [data,setData]=useState([]);
//     const navigator = useNavigate();

//     useEffect(()=>{
//         fetch(apiUrl)
//         .then(res=>res.json())
//         .then(res=>setData(res))
//     },[])


//     const formattedData=data.map((farmer)=>{
//         if(farmer.aid===localStorage.getItem('AdminId')){
//         return(  
        
//             <tr>
//                     <th scope="row">{farmer.fid}</th>
//                     <td>{farmer.fname}</td>
//                     <td>{farmer.fage}</td>
//                     <td>{farmer.ffrom}</td>
//                     <td><button className='btn btn-success' onClick={()=>navigator(`/home/farmer/edit/${farmer._id}`)}>Edit</button></td>
//                     <td><div className='btn btn-danger' onClick={()=>{
//                           axios.delete(`http://localhost:4001/farmer/${farmer._id}`)
//                           .then(()=>{console.log("Delete Data");
//                             window.location.reload();
//                       });
//                     }}>Delete</div></td>
//             </tr>
        
//         )
//                 }
//     })

//     function add(){
//         navigator('./add');
//     }

   

//   return (
   
//         <div className="container">
//         <div className='head' style={{ display: 'flex', alignItems: 'center' }}>
//             <div className='he1 mt-3'>
//                 <img style={{ height: 45, width: 45 }} src="https://cdn-icons-png.flaticon.com/128/839/839860.png" />
//             </div>
//             <div>
//                 <h1 style={{fontFamily:'revert'}}>Farmerlist</h1>
//             </div>
//             <div className='he2 btn btn-info' style={{ marginLeft: 'auto' }} onClick={add}>
//                 Add
//             </div>
//         </div>
    
//     <table className="table table-striped">
//         <thead>
//             <tr>
//                 <th scope="col">ID</th>
//                 <th scope="col">Farmer Name</th>
//                 <th scope="col">Age</th>
//                 <th scope="col">Village</th>
//                 <th scope="col">Edit</th>
//                 <th scope="col">Delete</th>
//             </tr>
//         </thead>
//         <tbody>
//             {formattedData}
//         </tbody>
//     </table>
// </div>

//   )
// }
const Farmerlist = () => {
    {


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
                                <button className="btn2"onClick={()=>{
                               axios.delete(`http://localhost:4001/farmer/${farmer._id}`)
                               .then(()=>{console.log("Delete Data");
                                 window.location.reload();
                           });
                         }}><img className="icon"style={{height:30,width:30}} src={del} alt="Farmer Icon" /></button>
                            </div>
    
                            <div className="col-7">
                            <button className="btn2 ms-6"onClick={()=>
                                navigator(`/home/farmer/edit/${farmer._id}`)}>
                                    <img className="icon"style={{height:30,width:30}} src={edit} alt="Farmer Icon" />
                                    </button>
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
    <div className="row titleCstAll p-2 mb-2 "style={{ borderBottom: '3px solid rgb(11, 35, 83)', borderRadius:35 }}  >
    <div className='col fw-bold '>
                <span className='fs-1 text-center' style={{color:" #0b2353", fontFamily:'revert'}}>Farmer list</span>
            </div>
            <div className="col-2 ">
                <button className="btn1" style={{backgroundColor:" #0b2353",color:"white",borderRadius:7}} onClick={add}>Add</button>
            </div>
    </div>
    <div className="row p-2">
        {formattedData}
    </div>
    </>
    
      )
    };
}

export default Farmerlist;