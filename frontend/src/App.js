import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserManagement from "./pages/UserManagment";
import UserLayout from "./component/UserLayout";
import ManageMaterials from "./pages/ManageMaterials";
import { Toaster } from 'react-hot-toast';
import Home from "./nav/Home";
import Header from "./nav/Header";
import Footer from "./nav/Footer";
import ProcumentDeptLogin from "./pages/ProcumentDeptLogin";
import OrderRequest from "./pages/OrderRequest";
import OrderHistory from "./pages/OrderHistory";
import SupplierManagement from "./pages/SupplierManagement";
import ViewSupplier from "./pages/ViewSupplier"
import UpdateSuppliyer from "./pages/UpdateSuppliyer"

function App() {
  return (
  <>
   <div>
    <Router>
     
      <Routes>

         <Route path="/home" element={<><Header/><Home/><Footer/></>} />
         <Route path="/" element={<><Header/><ProcumentDeptLogin/><Footer/></>} />
        <Route path="/usermanagement" element={<UserLayout name="User Management"><UserManagement/></UserLayout>} />
        <Route path="/material" element={<UserLayout name="Manage Materials"><ManageMaterials/></UserLayout>} />
        <Route path="/order" element={<UserLayout name="Pending Order Request"><OrderRequest/></UserLayout>} />
        <Route path="/orderhistory" element={<UserLayout name="Order History"><OrderHistory/></UserLayout>} />

        <Route path="/suppliermanagement" element={<UserLayout name="Supplier Management"><SupplierManagement/></UserLayout>} />
        <Route path="/viewsupplier" element={<UserLayout name="Supplier Management"><ViewSupplier/></UserLayout>} />
        <Route path="/updatesupplier/:id" element={<UserLayout name="Supplier Management"><UpdateSuppliyer/></UserLayout>} />








      </Routes>

      </Router>


      <Toaster position="top-center"
        reverseOrder={false} />
    </div>
  </>
  );
}

export default App;
