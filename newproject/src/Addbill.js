import { useEffect, useState } from 'react';
import './Addbill.css'
import { useNavigate } from 'react-router-dom';
import copy3 from './img/copy3.png'
import axios from 'axios';
import BillHistory from './BillHistory';
const Addbill = () => {
    const nav = useNavigate();

    //SET DAta for add new bill
    const [data,setData] = useState({
        total:0,
        pripriceof20:0,
        quantity:0
    });

    //Add function
    function add(){
        data.cname = adminData.aname;
        data.cid = adminData.aid;
        data.aid = localStorage.getItem("AdminId");
        console.log(data.aid);
        console.log(data.fid);
        axios.post(`http://localhost:4003/bill`,data)
        .then(()=>{
            console.log("add")
            console.log(adminData.aname);
            nav('../../home/billhistory')
        })

    }
    
    //Bill data For Bid count
    const [bill , setBill] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:4003/bill")
        .then(res=>res.json())
        .then(res=>setBill(res))
    },[])

    let count = bill.length;
    console.log(count)
    data.bid = count+1;


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
    
    
    return(
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
                                                {adminData.aname}
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <br/>
                                            Bill ID : 
                                            <span style={{margin:"10"}}>{count+1}</span>
                                            <br></br>
                                            Date : <input type='date'onChange={(e)=>{
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
                                           
                                           {/* Company ID : <input type='text' onChange={(e)=>{
                                                setData({...data,cid:e.target.value})
                                            }}></input><br /> */}
                                           
                                           Company Name :{adminData.aname}
                                           
                                           <br></br>
                                           Gst no:{adminData.agstno}
                                           
                                        </td>
                                        

                                        <td>
                                        Farmer ID : <input type='text' value= {data.fid}onChange={(e)=>{
                                                setData({...data,fid:e.target.value})
                                            }}></input><br />
                                           
                                           Farmer Name :
                                            {/* <select onChange={(e) => {
                                                                    setData({ ...data, fname: e.target.value });
                                                                }} 
                                                    value={data.fname}>
                                                        <option value="">Select Farmer</option>
                                                        {farmerOptions}
                                                    </select> */}
                                            <select onChange={(e) => {
                                                    const selectedFarmer = farmer.find(f => f.fname === e.target.value);
                                                    if (selectedFarmer) {
                                                        setData({ ...data, fid: selectedFarmer._id, fname: selectedFarmer.fname });
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
                                                                            setData({ ...data, mid: selectedMerchant._id, mname: selectedMerchant.mname });
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
                            <td><input type='text' placeholder='Enter Item Name'onChange={(e)=>{
                                                setData({...data,iname:e.target.value})
                                            }}></input></td>

                            <td><input value={data.priceof20} type='text' placeholder='Enter Price of 20KG'onChange={(e)=>{
                                                setData({...data,priceof20:e.target.value,total:e.target.value*data.quantity})
                                            }}></input></td>

                        </tr>

                   
                        <br/>
                         <tr class="heading">
                            <td>Quantity of Item</td>
                            
                            <td>TOTAL PRICE</td>
                        </tr>

                        <tr class="item">
                            <td><input value={data.quantity} type='text' placeholder='Enter Total Quantity'onChange={(e)=>{
                                                setData({...data,quantity:e.target.value,total:e.target.value*data.priceof20})
                                            }}></input></td>

                            <td><input type='text' placeholder='Enter Total Price' value={data.total}></input></td>
                        </tr>
                        <br/>
                        <tr class="total">
                            <td>
                                <tr>
                                <td>Status:</td>

                                <td><input type='text' placeholder='Pending/Complete'onChange={(e)=>{
                                                setData({...data,status:e.target.value})
                                            }}>
                                            </input>
                                </td>
                                </tr>
                                {/* <tr>
                                Status :
                               
                                            <select onChange={(e)=>{
                                                setData({...data,status:e.target.value})}}>
                                                      
                                                        <option value="">Complete</option>
                                                        <option value="">Pending</option>   
                                                        
                                                    </select>
                                </tr> */}
                            </td>
                         
                            <td>
                            <tr >
                                Total  :

                               <input value={data.total} type='text' placeholder='TOTAL'onChange={(e)=>{
                                                setData({...data,total:e.target.value})
                                            }}></input>
                            </tr>
                            </td>
                        </tr>
                      
                        <tr>
                            
                            <td>
                                <button className='btn1'>PRINT</button>
                            </td>
                            <td >
                                <button className='btn1' onClick={add}>SEND</button>
                            </td>
                        </tr>
                    </table>
                </div>
            </body>
        </html>
   </>
);
    
    
    
}
export default Addbill;