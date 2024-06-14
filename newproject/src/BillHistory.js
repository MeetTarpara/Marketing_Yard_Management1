import React from 'react'
import './BillHistory.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams,Link,Outlet } from 'react-router-dom';

function BillHistory(){
    
    
    const apiUrl='http://localhost:4003/bill';
    // const apiUrl='https://64f006a78a8b66ecf7791424.mockapi.io/bill';
    const [data,setData]=useState([]);
    const navigator = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect(()=>{
    //     fetch(apiUrl)
    //     .then(res=>res.json())
    //     .then(res=>setData(res))
    // },[])

    useEffect(() => {
        fetch(apiUrl)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then(res => {
                setData(res);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const fomatedData=data.map((bill)=>{
        if(bill.aid===localStorage.getItem('AdminId')){
        return(  
        
            <div class="card m-4 p-2 "  style={{ border: '2px solid rgb(11, 35, 83)' }}>
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
                <div class="label">Item:</div>
                <div class="value">{bill.iname}</div>
            </div>

            <div class="card-item">
                <div class="label">Status:</div>
                <div class="value paid">{bill.status}</div>
            </div>

            <div  class="card-item"></div >
            <div  class="card-item">

            </div >

            <div class="card-item">
                <button className="btn1" style={{backgroundColor:" #0b2353",color:"white",borderRadius:7}} onClick={()=>navigator(`/home/billhistory/edit/${bill._id}`)}>EDIT</button>
                <button className="btn1 ms-3" style={{backgroundColor:" #0b2353",color:"white",borderRadius:7}}  onClick={()=>{axios.delete(`http://localhost:4003/bill/${bill._id}`)
                          .then(()=>{console.log("Delete Data");
                            window.location.reload();
                           
                      });}}>DELETE</button>
            </div>
        </div>
        
        )}
    })



    return(
        <div className='container2'>
            <div class='head2'>
                <div class='he1 mt-1'>
                <img style={{height :45, width:45}} src="https://cdn-icons-png.flaticon.com/128/839/839860.png" />
                </div>
                <div class='he2'>
                    <h1>Bill History</h1>
                </div>
            </div>
            {fomatedData}
    
        </div>
    );
}
export default BillHistory;