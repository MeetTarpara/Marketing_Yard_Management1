import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const AddFarmer = () => {
    var [farmer, setFarmer] = useState({});
    var params = useParams();
    const nav = useNavigate()

    function add() {
        console.log("Add")
        farmer.aid = localStorage.getItem("AdminId");
        axios.post(`http://localhost:4001/farmer`, farmer)
            .then(() => {
                console.log("add")
                nav('../../home/farmer')
            });
        
    }

    return (
        <div>
            <div>
                <div className='Rform'>


                    <div class="title">
                        <p>Add Farmer</p>
                    </div>

                    <div class="r_form">
                        <form>
                            <div class="input_wrap p-2">
                                <label for="yourname" style={{ display: "block", fontSize: 15 }}>Farmer Id: </label>
                                <input type="number" style={{ width: "100%", height: 35, border: "none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8  }} name="studentName" class="input" id="yourId" value={farmer.fid} onChange={(e) => { setFarmer({ ...farmer, fid: e.target.value }) }} />
                            </div>
                            <div class="input_wrap p-2">
                                <label for="yourname" style={{ display: "block", fontSize: 15 }}>Farmer Name : </label>
                                <input type="text" style={{ width: "100%", height: 35, border: "none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8  }} name="studentName" class="input" id="yourname" value={farmer.fname} onChange={(e) => { setFarmer({ ...farmer, fname: e.target.value }) }} />
                            </div>
                            <div class="input_wrap p-2">
                                <label for="emailaddress" style={{ display: "block", fontSize: 15 }}>Farmer Age :</label>
                                <input type="number" style={{ width: "100%", height: 35, border: "none" ,borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8 }} name="studentEmail" class="input" id="emailaddress" value={farmer.fage} onChange={(e) => { setFarmer({ ...farmer, fage: e.target.value }) }} />
                            </div>
                            <div class="input_wrap p-2">
                                <label for="collagename" style={{ display: "block", fontSize: 15 }}>Farmer Photo :</label>
                                <input type="text" style={{ width: "100%", height: 35, border: "none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8  }} name="studentCollage" class="input" id="collagename" value={farmer.favatar} onChange={(e) => { setFarmer({ ...farmer, favatar: e.target.value }) }} />
                            </div>
                            <div class="input_wrap p-2">
                                <label for="enrollno" style={{ display: "block" }}>Farmer Password: </label>
                                <input type="String" style={{ width: "100%", height: 35, border: "none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8  }} name="studentEnrollment" class="input" id="enrollno" value={farmer.fpass} onChange={(e) => { setFarmer({ ...farmer, fpass: e.target.value }) }} />
                            </div>

                            <div class="input_wrap p-2">
                                <label for="address" style={{ display: "block", fontSize: 15 }}>Farmer Village : </label>
                                <input type="text" style={{ width: "100%", height: 35, border: "none",borderBottom: '2px solid rgb(11, 35, 83)' ,borderRadius:8  }} name="address" class="input" id="address" value={farmer.ffrom} onChange={(e) => { setFarmer({ ...farmer, ffrom: e.target.value }) }} />
                            </div>

                        </form>

                    </div>

                    <button className='btn btn-success' style={{ display: "block", marginInline: "auto" }} onClick={add} > Register</button>

                </div>
            </div>
        </div>
    )
}

export default AddFarmer
