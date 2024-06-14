import { useEffect, useState } from 'react';
import './Farmerlist.css';
import axios from 'axios';
import { useNavigate , Link} from 'react-router-dom';
import del from './img/delete.png'
import edit from './img/edit.png'


const Marchantlist = () => {
    
    const apiUrl='http://localhost:4002/merchant';
    const [data,setData]=useState([]);
    const navigator = useNavigate();

    useEffect(()=>{
        fetch(apiUrl)
        .then(res=>res.json())
        .then(res=>setData(res))
    },[])

    

    const formattedData=data.map((merchant)=>{
        if(merchant.aid===localStorage.getItem('AdminId')){
        return(  
            // <>
            // <tr>
            // <th scope="row">{merchant.mid}</th>
            // <td>{merchant.mname}</td>
            // <td>{merchant.mage}</td>
            // <td>{merchant.mfrom}</td>
            // <td><div className='btn btn-success' onClick={()=>navigator(`/home/merchant/edit/${merchant._id}`)}>Edit</div></td>
            // <td><div className='btn btn-danger' onClick={()=>{axios.delete(`http://localhost:4002/merchant/${merchant._id}`)
            //               .then(()=>{console.log("Delete Data");
            //                 window.location.reload();
            //           });}}>Delete</div></td>
            // </tr>
            
            // </>
            
            
                <div className="col-4 p-2 ">
                    <div class="card mainCstCard rounded-3 p-1"style={{ border: '2px solid rgb(11, 35, 83)' }} >
                        <div class="card-body p-2">
                            <h5 class="card-title fs-5 fw-bold pb-2">Merchant Name : {merchant.mname}</h5>
                            <h6 class="card-subtitle fw-bold fs-6 mb-2 text-dark">City : {merchant.mfrom}</h6>
                            <p class="card-text">Age : {merchant.mage}</p>
                            <Link className="card-link text-dark" to={"/home/merchant/detail/" + merchant._id} onClick={() => {
                                 console.log("figifdhg id =", merchant._id)
                                 localStorage.setItem("merchant_id", merchant._id);
                             }}>More Details</Link>
                           
                            <div className="row">
                                <div className="col-5">
                                    <button className="btn2" onClick={()=>{
                                   axios.delete(`http://localhost:4002/merchant/${merchant._id}`)
                                   .then(()=>{console.log("Delete Data");
                                     window.location.reload();
                               });
                             }}><img className="icon"style={{height:30,width:30}} src={del} alt="Farmer Icon" />
                             </button>
                                </div>
        
                                <div className="col-7">
                                <button className="btn2"  onClick={()=>navigator(`/home/merchant/edit/${merchant._id}`)}>
                                <img className="icon"style={{height:30,width:30}} src={edit} alt="Farmer Icon" />
                            
                                </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
            
        )
    }
    })
    function addMerchant(){
        navigator('./add');
    }


    return(
    
//         <div className="container">
//         <div className='head' style={{ display: 'flex', alignItems: 'center' }}>
//             <div className='he1 mt-3'>
//                 <img style={{ height: 45, width: 45 }} src="https://cdn-icons-png.flaticon.com/128/839/839860.png" />
//             </div>
//             <div>
//                 <h1>Merchantlist</h1>
//             </div>
//             <div className='he2 btn btn-info' style={{ marginLeft: 'auto' }} onClick={addMerchant}>
//                 Add
//             </div>
//         </div>
    
//     <table className="table table-striped">
//         <thead>
//             <tr>
//                 <th scope="col">ID</th>
//                 <th scope="col">merchant Name</th>
//                 <th scope="col">Age</th>
//                 <th scope="col">Village</th>
//                 <th scope="col">Edit</th>
//                 <th scope="col">Delete</th>
//             </tr>
//         </thead>
//         <tbody>
//             {formattedData}
//         </tbody>
//     </table>
    
// </div>
<>
    <div className="row titleCstAll p-2 mb-2 "style={{ borderBottom: '3px solid rgb(11, 35, 83)', borderRadius:35 }}  >
    <div className='col fw-bold '>
                <span className='fs-1 text-center' style={{color:" #0b2353", fontFamily:'revert'}}>Merchant list</span>
            </div>
            <div className="col-2 ">
                <button className="btn1" style={{backgroundColor:" #0b2353",color:"white",borderRadius:7}} onClick={addMerchant}>Add</button>
            </div>
    </div>
    <div className="row p-2">
        {formattedData}
    </div>
    </>
    );
}
export default Marchantlist;