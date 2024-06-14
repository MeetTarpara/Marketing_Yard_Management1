import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import men from '../../img/man.png'

const Mer_Profile = () =>{
    const navigator = useNavigate();
    var [merchant, setMerchant] = useState({});
    var params = useParams();
    const nav = useNavigate()
    useEffect(() => {

        fetch(`http://localhost:4002/merchant/${localStorage.getItem('MerchantId')}`)
            .then(res => res.json())
            .then(res => setMerchant(res));
    }, [])


    //bill============
    const [data, setData] = useState([]);
    useEffect(() => {

        fetch(`http://localhost:4003/bill`)
            .then(res => res.json())
            .then(res => setData(res));
    }, [])


    //map billll

    const fomatedData = data.map((bill) => {
        if ( bill.mid == localStorage.getItem('MerchantId')) {
            return (

                <div class="card m-4 p-2 "style={{ border: '2px solid rgb(11, 35, 83)' }}>
                    <div class="card-item">
                        <div class="label">Bill ID:</div>
                        <div class="value">{bill.bid}</div>
                    </div>
                    <div class="card-item">
                        <div class="label">Merchant Name:</div>
                        <div class="value">{bill.mname}</div>
                    </div>
                    <div class="card-item">
                        <div class="label">Farmer Name:</div>
                        <div class="value">{bill.fname}</div>
                    </div>

                    <div class="card-item">
                        <div class="label">Date:</div>
                        <div class="value">{bill.bdate}</div>
                    </div>
                    <div class="card-item">
                        <div class="label">Merchant ID:</div>
                        <div class="value">{bill.mid}</div>
                    </div>
                    <div class="card-item">
                        <div class="label">Farmer ID:</div>
                        <div class="value">{bill.fid}</div>
                    </div>



                    <div class="card-item">
                        <div class="label">Amount:</div>
                        <div class="value">{bill.total}</div>
                    </div>
                    <div class="card-item">
                        <div class="label">Status:</div>
                        <div class="value paid">{bill.status}</div>
                    </div>
                    <div class="card-item">
                        <button className='btn btn-success me-1' onClick={() => navigator(`/home/billhistory/edit/${bill._id}`)}>EDIT</button>
                        <button className='btn btn-danger ms-1' onClick={() => {
                            axios.delete(`http://localhost:4003/bill/${bill._id}`)
                                .then(() => {
                                    console.log("Delete Data");
                                    window.location.reload();

                                });
                        }}>DELETE</button>
                    </div>
                </div>

            )
        }
    })
    return(<>
     <div>
            <div>
                <div className="row titleCstAll p-2 mb-2 "style={{ borderBottom: '3px solid rgb(11, 35, 83)' ,borderRadius:35 }}   >
                    <div className='col fw-bold '>
                        <span className='fs-1 text-center' style={{ color: " #0b2353", fontFamily: 'revert' }}>My Profile</span>
                    </div>
                    <div className="col-2 ">
                       
                    </div>
                </div>



                <div className="col-12 p-2 ">
                    <div class="card mainCstCard p-1" style={{ border: '2px solid rgb(11, 35, 83)'}} >
                        <div class="card-body p-2">
                            <h1 class="card-title fs-5 fw-bold pb-2">Merchant Name : {merchant.mname}</h1>
                            <br></br>
                           
                            <h6 class="card-subtitle fw-bold fs-6 mb-2 text-dark">City : {merchant.mfrom}</h6>
                            <br/>
                            <p >Age : {merchant.mage}</p>
                            <p >Id : {merchant.mid}</p>
                            
                            <p > Password : {merchant.mpass}</p>
                            <div className="row">
                                <div className='col-5'   >
                                    <button className='btn btn-success w-50'  onClick={() => navigator(`../Edit/${merchant._id}`)}>Edit Details</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={men} style={{height:250,width :250 ,margin:"20px"}}/>
                        </div>
                    </div>
                </div>
                <div >

                </div>



            </div>
        </div>

    </>)
}

export default Mer_Profile;