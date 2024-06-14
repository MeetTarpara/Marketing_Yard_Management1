import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';



const Mer_BillDetail = () =>{
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
                        {/* <button className="btn1" style={{backgroundColor:" #0b2353",color:"white",borderRadius:7}}  onClick={() => navigator(`/home/billhistory/edit/${bill._id}`)}>EDIT</button> */}
                        <div></div>
                        <button className="btn2 ms-5" style={{width:200}}  onClick={() => {navigator(`../Bill/${bill._id}`)}}>View More</button>
                    </div>
                </div>

            )
        }
    })
    return(<>
     <div>
            <div>
                
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

export default Mer_BillDetail;