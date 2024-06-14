
import './App.css';

function App() {
  return (
    <div class="lmain">
    <div class="pt1">
      <div class="logols">
        <img src="images/1.png" class="lsimg"/>
      </div>
      <div class="fs-2 text-light fw-bold text-center w-100">Treding</div>
    </div>
  
    <div class="pt2 p-5">
      <div class="head fs-1 fw-bold text-center w-100">
        Admin Login
      </div>
      
      <label class="fs-5 mb2-2 mt-2 " >User ID : </label>
      <br/>
      <input type="text" class="form-control mb-2 mt-2" ></input><br/>
      <label class="fs-5 mb2-2 mt-2" >Password : </label>
      <br/>
      <input type="password" class="form-control mb-2 mt-2"/>
      <div class="gobtn mt-5">
        <button class="btn lsbtn fs-6 fw-bold" routerLink="/firstpage">Go Back</button>
      </div>
      <div class="loginbtn mt-5">
        <button  class="btn lsbtn fs-6 fw-bold" >Login</button>
      </div>
    </div>
  
</div>  



  );
}

export default App;
