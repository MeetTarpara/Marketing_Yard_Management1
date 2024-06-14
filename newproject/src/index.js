import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Login from './Login';

import{BrowserRouter,Routes,Route} from 'react-router-dom';
import Farmerlist from './Farmerlist';
import Marchantlist from './Marchantlist';
import Addbill from './Addbill';
import BillHistory from './BillHistory';
import EditFarmer from './EditFarmer/EditFarmer';
import AddFarmer from './AddFarmer/AddFarmer';
import Home from './Home';
import AddMerchant from './AddMerchant/AddMerchant';
import EditMerchant from './EditMerchant/EditMerchant';
import EditBill from './EditBill/EditBill';
import AddBill1 from './ADDBILL1/AddBill1';
import DetailFarmer from './Detail_Farmer/DetailFarmer';
import DetailMerchant from './Detail_Merchant/DetailMerchant';
import Mer_Main from './MERCHANT/Mer_Main/Mer_Main';
import Me_Main from './MAINADMIN/Me_Main/Me_Main';
import Me_List from './MAINADMIN/Me_List/Me_List';
import Add_Company from './MAINADMIN/Add_Company/Add_Company';
import Edit_Company from './MAINADMIN/Edit_Company/Edit_Company';
import Mer_Profile from './MERCHANT/Mer_Profile/Mer_Profile';
import Mer_Edit from './MERCHANT/Mer_Edit/Mer_Edit';
import Mer_BillDetail from './MERCHANT/Mer_BillDetail/Mer_BillDetail';
import Mer_Billinfo from './MERCHANT/Mer_Billinfo/Mer_Billinfo';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}>
              <Route path='/home/farmer' element={<Farmerlist/>}></Route>
              <Route path='/home/merchant' element={<Marchantlist/>}></Route>
              <Route path='/home/addbill' element={<Addbill/>}></Route>
              <Route path='/home/billhistory' element={<BillHistory/>}></Route>
              <Route path='/home/farmer/edit/:id' element={<EditFarmer/>}></Route>
              <Route path='/home/farmer/detail/:id' element={<DetailFarmer/>}></Route>

              <Route path='/home/farmer/add' element={<AddFarmer/>}></Route>
              <Route path='/home/merchant/add' element={<AddMerchant/>}></Route>
              <Route path='/home/merchant/edit/:id' element={<EditMerchant/>}></Route>
              <Route path='/home/merchant/detail/:id' element={<DetailMerchant/>}></Route>

              <Route path='/home/billhistory/edit/:id' element={<EditBill/>}></Route>
              <Route path='/home/newbill' element={<AddBill1/>}></Route>

        </Route>
        <Route path='/Merchant' element={<Mer_Main/>}>
          <Route path='/Merchant/Profile' element={<Mer_Profile/>}></Route>
          <Route path='/Merchant/Edit/:id' element={<Mer_Edit/>}></Route>
          <Route path='/Merchant/Bill' element={<Mer_BillDetail/>}></Route>
          <Route path='/Merchant/Bill/:id' element={<Mer_Billinfo/>}></Route>



        </Route>
        <Route path='/Me' element={<Me_Main/>}>
          <Route path='/Me/List' element={<Me_List/>}></Route>
          <Route path='/Me/AddCompany' element={<Add_Company/>}></Route>
          <Route path='/Me/List/Edit/:id' element={<Edit_Company/>}></Route>
        </Route>


      </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   {/* <App /> */}
  //   <Login/>
  //   <Home/>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
