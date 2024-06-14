import { Link, useNavigate } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import copy3 from "./img/copy3.png";

function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [Admin , setAdmin] = useState([]);
  const nav = useNavigate();

  useEffect(()=>{
    fetch("http://localhost:4000/Admin")
    .then(res=>res.json())
    .then(res=>setAdmin(res))
},[])

const [farmer , setfarmer] = useState([]);

useEffect(()=>{
  fetch("http://localhost:4001/farmer")
  .then(res=>res.json())
  .then(res=>setfarmer(res))
},[])

const [merchant , setmerchant] = useState([]);

useEffect(()=>{
  fetch("http://localhost:4002/merchant")
  .then(res=>res.json())
  .then(res=>setmerchant(res))
},[])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var f=1;

    const adm = Admin.find(temp=>temp.aname == formData.username && temp.apass == formData.password)
    const far = farmer.find(temp=>temp.fname == formData.username && temp.fpass == formData.password)
    const mer = merchant.find(temp=>temp.mname == formData.username && temp.mpass == formData.password)


    // Admin.map((e)=>{
    //   if(e.aname===formData.username && e.apass===formData.password){
    //     f=0;
    //     nav("/home/farmer");

    //     localStorage.setItem('AdminId' , e._id);
    //   }
    // })

    // if(f==1){
    //   alert('worng password')
    // }

    if(formData.username ==  "MMM" && formData.password=="MMM"){
      nav("/Me/List");
    }

    else if(adm != null){
      localStorage.setItem('AdminId' , adm._id);

      nav("/home/farmer");
    }
    else if(far != null){
      nav("/Farmer")
    }
    else if(mer != null){
      localStorage.setItem('MerchantId' , mer._id);
      nav("/Merchant/Profile")
    }
    else{
      alert("Enter valid input")
    }

    console.log(formData);
  };


  return (
    <>
    

      <form onSubmit={handleSubmit}>
    
        <section className='back'>
        
          <div className="lmain">
            <div className="pt1">
              <div className="logols">
                {/* <img src="images/3.png" alt="logo" className="lsimg" /> */}
                <img src={copy3} alt="logo" className="lsimg" />

              </div>
            </div>

            <div className="pt2 p-3">
              <div className="head fs-1 fw-bold text-center w-100">
                Login
              </div>

              <label htmlFor="username" className="fs-5 mb2-2 mt-2">User ID:</label>
              <br />
              <input type="text" id="username" name="username" value={formData.username} onChange={handleInputChange} className="form-control mb-2 mt-2" />
              <br />
              <label htmlFor="password" className="fs-5 mb2-2 mt-2">Password:</label>
              <br />
              <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} className="form-control mb-2 mt-2" />
              <div className="loginbtn mt-4">
                <button type="submit" className="btn lsbtn fs-6 fw-bold">Login</button>
              </div>
            </div>
            </div>
       
        </section>
       
      </form>
      
    </>
  );
}


export default Login;
