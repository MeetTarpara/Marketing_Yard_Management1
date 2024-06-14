import {Link,Outlet,useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import'../../Home.css'
import copy3 from '../../img/copy3.png'
import i6 from '../../img/detail.png'
import i7 from '../../img/contect.png'
import men from '../../img/man.png'




import i2 from '../../img/list.png'
import i3 from '../../img/bill.png'
import i4 from '../../img/billhistory.png'
import i5 from '../../img/addnew.png'



import axios from 'axios';
function Mer_Main(){

    const apiUrl=`http://localhost:4002/Merchant/${localStorage.getItem('MerchantId')}`;
    const [adminData,setadminData]=useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setadminData(res))
    },[])

    const nav =useNavigate();
    return(
        <div>
            <div class="header  ">
                <div class="i1">
                <img src={men}/>
                </div>
                <div class="i2 text-light fw-bold ">
                Merchant - {adminData.mname}
                </div>
                <div className='logout'>
                    <button className='btn1 mt-3' style={{backgroundColor:"#CADCFC",borderRadius:7}} onClick={()=>{
                        localStorage.clear();
                        nav('../')
                    }}>Logout</button>
                </div>
            </div>

            <div class="row">
    <div class="sidebar1 col-3">
        <Link className='lii mt-3' style={{textDecoration:"none"}} to='/Merchant/Profile'>
            <img className="icon" src={i2} alt="Farmer Icon" />
            <span>My Profile</span>
        </Link>

        <Link className='lii' style={{textDecoration:"none"}}  to='/Merchant/Bill'>
            <img className='icon' src={i3} alt="Bill History Icon" />
            <span>Bill Details</span>
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
export default Mer_Main;