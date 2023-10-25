import React from "react";
import "./nav.css";
import ps from "../Images/ps.jpg";
import { useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="homeButtons">
        <button
          type="button"
          class="btn btn-danger btn-lg btn-block"
          href="/pro"
          onClick={() => {
            navigate("/pro");
          }}
        >
          <h2 className="homeButtonText">Procument Staff</h2>
        </button>
        <br />
        <button
          type="button"
          class="btn btn-danger btn-lg btn-block"
          onClick={() => {
            navigate("/registerSupplier");
          }}
        >
          <h2 className="homeButtonText">Supplier</h2>
        </button>
      </div>

      <img className="homeImage" src={ps} alt="" />
    </div>
  );
}

export default Home;
