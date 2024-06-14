import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import del from '../img/delete.png'
import edit from '../img/edit.png'


const DetailMerchant = () =>{
    const navigator = useNavigate();
    var [merchant, setMerchant] = useState({});
    var params = useParams();
    const nav = useNavigate()
    useEffect(() => {

        fetch(`http://localhost:4002/merchant/${params.id}`)
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
        if (bill.aid === localStorage.getItem('AdminId') && bill.mid == localStorage.getItem('merchant_id')) {
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
                        <button className="btn2" onClick={() => navigator(`/home/billhistory/edit/${bill._id}`)}>
                        <img className="icon"style={{height:30,width:30}} src={edit} alt="Farmer Icon" />
                        </button>
                        <button className="btn2 ms-3"onClick={() => {
                            axios.delete(`http://localhost:4003/bill/${bill._id}`)
                                .then(() => {
                                    console.log("Delete Data");
                                    window.location.reload();

                                });
                        }}>
                            <img className="icon"style={{height:30,width:30}} src={del} alt="Farmer Icon" />
                        </button>
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
                        <span className='fs-1 text-center' style={{ color: " #0b2353", fontFamily: 'revert' }}>Merchant Detail</span>
                    </div>
                    <div className="col-2 ">
                        <button className="btn btn-dark" style={{ backgroundColor: " #0b2353" }} onClick={() => {
                            nav("../merchant")
                            localStorage.removeItem("merchant_id");
                        }}>Back</button>
                    </div>
                </div>



                <div className="col-12 p-2 ">
                    <div class="card mainCstCard p-1" style={{ border: '2px solid rgb(11, 35, 83)'}} >
                        <div class="card-body p-2">
                            <h5 class="card-title fs-5 fw-bold pb-2">Merchant Name : {merchant.mname}</h5>
                            <h6 class="card-subtitle fw-bold fs-6 mb-2 text-dark">City : {merchant.mfrom}</h6>
                            <p >Age : {merchant.mage}</p>
                            <p > Password : {merchant.mpass}</p>
                            <div className="row">
                                <div className="col-5">
                                    <button className="btn1" style={{backgroundColor:" #0b2353",color:"white",borderRadius:7}} onClick={() => {
                                        axios.delete(`http://localhost:4002/merchant/${merchant._id}`)
                                            .then(() => {
                                                console.log("Delete Data");
                                                window.location.reload();
                                            });
                                    }}>Delete</button>
                                </div>

                                <div className="col-7">
                                    <button className="btn1" style={{backgroundColor:" #0b2353",color:"white",borderRadius:7}} onClick={() => navigator(`/home/merchant/edit/${merchant._id}`)}>Edit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div >

                    <div>
                        <div className="row titleCstAll p-2 mb-2"style={{ borderBottom: '3px solid rgb(11, 35, 83)', borderRadius:35 }}    >
                            <div className='col fw-bold '>
                                <span className='fs-1 text-center' style={{ color: " #0b2353", fontFamily: 'revert' }}>Bill Detail</span>
                            </div>

                        </div>
                        {fomatedData}

                    </div>

                </div>



            </div>
        </div>

    </>)
}

export default DetailMerchant;