import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserManagement from "./pages/UserManagment";
import UserLayout from "./component/UserLayout";
import SupplierManagement from "./pages/SupplierManagement";
import ViewSupplier from "./pages/ViewSupplier"
import UpdateSuppliyer from "./pages/UpdateSuppliyer"

function App() {
  return (
  <>
   <div>
    <Router>
     
      <Routes>


        <Route path="/usermanagement" element={<UserLayout name="User Management"><UserManagement/></UserLayout>} />
        <Route path="/suppliermanagement" element={<UserLayout name="Supplier Management"><SupplierManagement/></UserLayout>} />
        <Route path="/viewsupplier" element={<UserLayout name="Supplier Management"><ViewSupplier/></UserLayout>} />
        <Route path="/updatesupplier/:id" element={<UserLayout name="Supplier Management"><UpdateSuppliyer/></UserLayout>} />






      </Routes>

      </Router>
    </div>
  </>
  );
}

export default App;
