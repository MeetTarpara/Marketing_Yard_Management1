import React, { useEffect, useState } from 'react'
import '../Addbill.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import copy3 from '../img/copy3.png'

const EditBill = () => {
    var [data,setData]=useState({});
    var params=useParams();
    const nav = useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:4003/bill/${params.id}`)
        .then(res=>res.json())
        .then(res=>setData(res));
    },[])
    function edited() {
        console.log(data)
        axios.patch(`http://localhost:4003/bill/${params.id}`,data)
        .then(()=>{console.log("Edited Data");
    nav('../../home/billhistory')});
    }

        //Admin Data
        const apiUrl=`http://localhost:4000/Admin/${localStorage.getItem('AdminId')}`;
        const [adminData,setadminData]=useState([]);
        const navigator = useNavigate();

        useEffect(()=>{
            fetch(apiUrl)
            .then(res=>res.json())
            .then(res=>setadminData(res))
        },[])
        
        //Farmer data for select
        const [farmer , setFarmer] = useState([]);
        useEffect(()=>{
            fetch("http://localhost:4001/farmer")
            .then(res=>res.json())
            .then(res=>setFarmer(res))
        },[])
        console.log(farmer)

        const farmerOptions = farmer.map((f) => {
            if (f.aid === localStorage.getItem('AdminId')) {    
                return(
                <option key={f._id} value={f.fname}>
                    {f.fname}
                </option>  
                );
            }
            return null;
        });


        //Merchant data for select
        const[merchant,setMerchant]=useState([]);
        useEffect(()=>{
            fetch("http://localhost:4002/merchant")
            .then(res=>res.json())
            .then(res=>setMerchant(res))
        },[])

        const merchantOptions = merchant.map((m) => {
            if (m.aid === localStorage.getItem('AdminId')) {
                return (  
                    <option key={m._id} value={m.mname}>
                        {m.mname}
                    </option>
                );
            }
            return null; // Add this line to handle the case where the condition is not met
        });



  return (
    <>
    <html>
    
        <body className='all'>
            <div class="invoice-box">
                <table cellpadding="0" cellspacing="0">
                    <tr class="top">
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td >
                                        <div class="header1">
                                            <div class="ii1">
                                       
                                            <img src={copy3} />
                                            </div>
                                            <div class="ii2 text-light fw-bold ">
                                            Meet Treding
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <br/>
                                        Bill ID : <input type='text'  value={data.bid} onChange={(e)=>{
                                            setData({...data,bid:e.target.value})
                                        }}></input><br />
                                        Date : <input type='date' value={data.bdate} onChange={(e)=>{
                                            setData({...data,bdate:e.target.value})
                                        }}></input><br />
                                        
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <br/>

                    <tr class="information">
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td class='cname'>
                                       
                                    
                                       
                                       Company Name : {adminData.aname}
                                       <br></br>
                                       Gst no:{adminData.agstno}
                                       
                                    </td>
                                    

                                    <td>
                                    Farmer ID : <input type='text' value= {data.fid}onChange={(e)=>{
                                                setData({...data,fid:e.target.value})
                                            }}></input><br />
                                           
                                           Farmer Name :
                                            <select onChange={(e) => {
                                                    const selectedFarmer = farmer.find(f => f.fname === e.target.value);
                                                    if (selectedFarmer) {
                                                        setData({ ...data, fid: selectedFarmer.fid, fname: selectedFarmer.fname });
                                                    } else {
                                                        setData({ ...data, fid: '', fname: '' });
                                                    }
                                                }} value={data.fname}>
                                                    <option value="">Select Farmer</option>
                                                    {farmerOptions}
                                            </select>
                                           
                                    </td>

                                    <td class='cname'>
                                    Merchant ID : <input type='text' value={data.mid} onChange={(e)=>{
                                                setData({...data,mid:e.target.value})
                                            }}></input><br />
                                           
                                           Merchant Name : 
                                            <select onChange={ (e) => {
                                                                        // setData({...data,mname:e.target.value})
                                                                        const selectedMerchant = merchant.find(m => m.mname === e.target.value);
                                                                        if (selectedMerchant) {
                                                                            setData({ ...data, mid: selectedMerchant.mid, mname: selectedMerchant.mname });
                                                                        } else {
                                                                            setData({ ...data, mid: '', mname: '' });
                                                                        }
                                                                    }}
                                                        value={data.mname}>
                                                        <option value="">Select Merchant</option>
                                                        {merchantOptions}
                                                    </select>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                  

                    <tr class="heading">
                        <td>  Item</td>
                        
                        <td>Price of 20KG</td>
                    </tr>

                    <tr class="item">
                        <td><input type='text' placeholder='Enter Item Name' value={data.iname} onChange={(e)=>{
                                            setData({...data,iname:e.target.value})
                                        }}></input></td>

                        <td><input type='text' placeholder='Enter Price of 20KG' value={data.priceof20} onChange={(e)=>{
                                            setData({...data,priceof20:e.target.value})
                                        }}></input></td>

                    </tr>

               
                    <br/>
                     <tr class="heading">
                        <td>Quantity of Item</td>
                        
                        <td>TOTAL PRICE</td>
                    </tr>

                    <tr class="item">
                        <td><input type='text' placeholder='Enter Total Quantity' value={data.quantity} onChange={(e)=>{
                                            setData({...data,quantity:e.target.value})
                                        }}></input></td>

                        <td><input type='text' placeholder='Enter Total Price'  value={data.total} onChange={(e)=>{
                                            setData({...data,total:e.target.value})
                                        }}></input></td>
                    </tr>
                    <br/>
                    <tr class="total">
                        <td>
                            <tr>
                            <td>Status:</td>

                            <td><input type='text' placeholder='Panding/Complete'  value={data.status} onChange={(e)=>{
                                            setData({...data,status:e.target.value})
                                        }}></input></td>
                            </tr>
                        </td>
                        
                        <td>
                        <tr >
                            <td>Total:</td>

                            <td><input type='text' placeholder='TOTAL'  value={data.total} onChange={(e)=>{
                                            setData({...data,total:e.target.value})
                                        }}></input></td>
                        </tr>
                        </td>
                    </tr>
                    <tr>
                        
                        <td>
                            <button>PRINT</button>
                        </td>
                        <td >
                            <button onClick={edited}>SEND</button>
                        </td>
                    </tr>
                </table>
            </div>
        </body>
    </html>
</>
  )
}

export default EditBill
