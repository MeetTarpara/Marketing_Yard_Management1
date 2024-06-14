import React, { useEffect, useState } from 'react'
// import '../Addbill.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import copy3 from '../../img/copy3.png'

const Mer_Billinfo = () => {
    var [data,setData]=useState({});
    var params=useParams();
    const nav = useNavigate()
    useEffect(()=>{
        fetch(`http://localhost:4003/bill/${params.id}`)
        .then(res=>res.json())
        .then(res=>setData(res));
        console.log(params.id);
    },[])
    // function edited() {
    //     console.log(data)
    //     axios.patch(`http://localhost:4003/bill/${params.id}`,data)
    //     .then(()=>{console.log("Edited Data");
    // nav('../../home/billhistory')});
    // }

        // //Admin Data
        // const apiUrl=`http://localhost:4000/Admin/${localStorage.getItem('AdminId')}`;
        // const [adminData,setadminData]=useState([]);
        // const navigator = useNavigate();

        // useEffect(()=>{
        //     fetch(apiUrl)
        //     .then(res=>res.json())
        //     .then(res=>setadminData(res))
        // },[])
        
        // //Farmer data for select
        // const [farmer , setFarmer] = useState([]);
        // useEffect(()=>{
        //     fetch("http://localhost:4001/farmer")
        //     .then(res=>res.json())
        //     .then(res=>setFarmer(res))
        // },[])
        // console.log(farmer)

        // const farmerOptions = farmer.map((f) => {
        //     if (f.aid === localStorage.getItem('AdminId')) {    
        //         return(
        //         <option key={f._id} value={f.fname}>
        //             {f.fname}
        //         </option>  
        //         );
        //     }
        //     return null;
        // });


        // //Merchant data for select
        // const[merchant,setMerchant]=useState([]);
        // useEffect(()=>{
        //     fetch("http://localhost:4002/merchant")
        //     .then(res=>res.json())
        //     .then(res=>setMerchant(res))
        // },[])

        // const merchantOptions = merchant.map((m) => {
        //     if (m.aid === localStorage.getItem('AdminId')) {
        //         return (  
        //             <option key={m._id} value={m.mname}>
        //                 {m.mname}
        //             </option>
        //         );
        //     }
        //     return null; // Add this line to handle the case where the condition is not met
        // });



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
                                            {data.cname}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <br/>
                                        Bill ID :{data.bid}<br />
                                        Date : {data.bdate}<br />
                                        
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
                                       
                                    
                                       
                                       Company Name : {data.cname}
                                       <br></br>
                                       {/* Gst no:{data.agstno} */}
                                       
                                    </td>
                                    

                                    <td>
                                    {/* Farmer ID : {data.fid} */}
                                           
                                           Farmer Name :
                                           {data.fname}
                                           
                                    </td>

                                    <td class='cname'>
                                    {/* Merchant ID : {data.mid} */}
                                           
                                           Merchant Name : 
                                           {data.mname}
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
                        <td>{data.iname}</td>

                        <td>{data.priceof20}</td>

                    </tr>

               
                    <br/>
                     <tr class="heading">
                        <td>Quantity of Item</td>
                        
                        <td>TOTAL PRICE</td>
                    </tr>

                    <tr class="item">
                        <td>{data.quantity}</td>

                        <td>{data.total}</td>
                    </tr>
                    <br/>
                    <tr class="total">
                        <td>
                            <tr>
                            <td>Status:</td>

                            <td>{data.status}</td>
                            </tr>
                        </td>
                        
                        <td>
                        <tr >
                            <td>Total:</td>

                            <td>{data.total}</td>
                        </tr>
                        </td>
                    </tr>
                    <tr>
                        
                        <td>
                            {/* <button>PRINT</button> */}
                        </td>
                        <td >
                            <button className="btn1" style={{backgroundColor:" #0b2353",color:"white",borderRadius:7}} >Print</button>
                        </td>
                    </tr>
                </table>
            </div>
        </body>
    </html>
</>
  )
}

export default Mer_Billinfo
