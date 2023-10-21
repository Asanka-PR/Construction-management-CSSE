import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserManagement from "./pages/UserManagment";
import UserLayout from "./component/UserLayout";

function App() {
  return (
  <>
   <div>
    <Router>
     
      <Routes>


        <Route path="/usermanagement" element={<UserLayout name="User Management"><UserManagement/></UserLayout>} />
      







      </Routes>

      </Router>
    </div>
  </>
  );
}

export default App;
