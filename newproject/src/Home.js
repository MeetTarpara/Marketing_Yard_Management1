import {Link,Outlet,useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Farmerlist from './Farmerlist';
import'./Home.css'
import copy3 from './img/copy3.png'
import i6 from './img/detail.png'
import i7 from './img/contect.png'



import i2 from './img/list.png'
import i3 from './img/bill.png'
import i4 from './img/billhistory.png'
import i5 from './img/addnew.png'



import axios from 'axios';
function Home(){

    const apiUrl=`http://localhost:4000/Admin/${localStorage.getItem('AdminId')}`;
    const [adminData,setadminData]=useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setadminData(res))
    },[])

    // const formattedData=data.map((farmer)=>{
    //     return(  
        
    //         <tr>
    //                 <th scope="row">{farmer.fid}</th>
    //                 <td>{farmer.fname}</td>
    //                 <td>{farmer.fage}</td>
    //                 <td>{farmer.ffrom}</td>
    //                 <td><button className='btn btn-success' onClick={()=>navigator(`/home/farmer/edit/${farmer._id}`)}>Edit</button></td>
    //                 <td><div className='btn btn-danger' onClick={()=>{
    //                       axios.delete(`http://localhost:4001/farmer/${farmer._id}`)
    //                       .then(()=>{console.log("Delete Data");
    //                     window.location.reload();
    //                   });
    //                 }}>Delete</div></td>
    //         </tr>
        
    //     )
    // })

    const nav =useNavigate();
    return(
        <div>
            <div class="header  ">
                <div class="i1">
                <img src={copy3}/>
                </div>
                <div class="i2 text-light fw-bold ">
                {adminData.aname}
                </div>
                <div className='logout'>
                    <button className="btn1 mt-3" style={{backgroundColor:" #CADCFC",borderRadius:7}} onClick={()=>{
                        localStorage.clear();
                        nav('../')
                    }}>Logout</button>
                </div>
            </div>

            <div class="row">
    <div class="sidebar1 col-3">
        <Link className='lii mt-3' style={{textDecoration:"none"}}  to='/home/farmer'>
            <img className="icon" src={i2} alt="Farmer Icon" />
            <span>Farmer List</span>
        </Link>

        <Link className='lii' style={{textDecoration:"none"}}  to='/home/farmer/add'>
            <img className="icon" src={i5} alt="Farmer Icon" />
            <span>Add Farmer</span>
        </Link>


        <Link className='lii' style={{textDecoration:"none"}}  to='/home/merchant'>
            <img className="icon" src={i2} alt="Merchant Icon" />
            <span>Merchant List</span>
        </Link>

        <Link className='lii' style={{textDecoration:"none"}}  to='/home/merchant/add'>
            <img className="icon" src={i5} alt="Merchant Icon" />
            <span>Add Merchant</span>
        </Link>


        <Link className='lii' style={{textDecoration:"none"}} to='/home/addbill'>
            <img className='icon' src={i3} alt="Add Bill Icon" />
            <span>Add Bill</span>
        </Link>
        <Link className='lii' style={{textDecoration:"none"}}  to='/home/billhistory'>
            <img className='icon' src={i4} alt="Bill History Icon" />
            <span>Bill History</span>
        </Link>
        <Link style={{textDecoration:"none"}} to='/home/newbill'>
            <img className="icon" src={i6} alt="Details Icon" />
            <span>Details</span>
        </Link>
        <Link style={{textDecoration:"none"}}>
            <img className="icon" src={i7} alt="Contact Icon" />
            <span>Contact</span>
        </Link>

        
    </div>

    <div class="col">
        <div class="main1">
            <Outlet/>
        </div>
    </div>
</div>


        </div>
    );
}
export default Home;