import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Add_Company = () => {
    var [company, setCompany] = useState({});
    var params = useParams();
    const nav = useNavigate()

    function add() {
        console.log("Add")
        // farmer.aid = localStorage.getItem("AdminId");
        axios.post(`http://localhost:4000/admin`, company)
            .then(() => {
                console.log("add")
                nav('../../Me/List')
            });
        
    }

    return (
        <div>
            <div>
                <div className='Rform'>


                    <div class="title">
                        <p>Add Company</p>
                    </div>

                    <div class="r_form">
                        <form>
                            <div class="input_wrap p-2">
                                <label for="yourname" style={{ display: "block", fontSize: 15 }}>Company Name: </label>
                                <input type="text" style={{ width: "100%", height: 35, border: "none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8  }} name="studentName" class="input" id="yourId" value={company.aname} onChange={(e) => { setCompany({ ...company, aname: e.target.value }) }} />
                            </div>
                            <div class="input_wrap p-2">
                                <label for="yourname" style={{ display: "block", fontSize: 15 }}>GST NO : </label>
                                <input type="text" style={{ width: "100%", height: 35, border: "none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8  }} name="studentName" class="input" id="yourname" value={company.agstno} onChange={(e) => { setCompany({ ...company, agstno: e.target.value }) }} />
                            </div>
                            <div class="input_wrap p-2">
                                <label for="emailaddress" style={{ display: "block", fontSize: 15 }}>Mail :</label>
                                <input type="text" style={{ width: "100%", height: 35, border: "none" ,borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8 }} name="studentEmail" class="input" id="emailaddress" value={company.amail} onChange={(e) => { setCompany({ ...company, amail: e.target.value }) }} />
                            </div>
                            <div class="input_wrap p-2">
                                <label for="collagename" style={{ display: "block", fontSize: 15 }}>Pass :</label>
                                <input type="text" style={{ width: "100%", height: 35, border: "none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8  }} name="studentCollage" class="input" id="collagename" value={company.apass} onChange={(e) => { setCompany({ ...company, apass: e.target.value }) }} />
                            </div>
                           
                     
                        </form>

                    </div>

                    <button className='btn btn-success' style={{ display: "block", marginInline: "auto" }} onClick={add} > Register</button>

                </div>
            </div>
        </div>
    )
}

export default Add_Company
