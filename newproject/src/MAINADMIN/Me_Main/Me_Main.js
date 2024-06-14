import {Link,Outlet,useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import'../../Home.css'
import copy3 from '../../img/copy3.png'
import i6 from '../../img/detail.png'
import i7 from '../../img/contect.png'




import i2 from '../../img/list.png'
import i3 from '../../img/bill.png'
import i4 from '../../img/billhistory.png'
import i5 from '../../img/addnew.png'

function Me_Main(){

    const apiUrl=`http://localhost:4000/Admin/${localStorage.getItem('AdminId')}`;
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
                <img src={copy3}/>
                </div>
                <div class="i2 text-light fw-bold ">
                Admin
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
        <Link className='lii mt-3' style={{textDecoration:"none"}}to='/Me/List'  >
            <img className="icon" src={i2} alt="Farmer Icon" />
            <span>Company List</span>
        </Link>

        <Link className='lii' style={{textDecoration:"none"}} to='/Me/AddCompany' >
            <img className="icon" src={i5} alt="Farmer Icon" />
            <span>Add Company</span>
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
export default Me_Main;