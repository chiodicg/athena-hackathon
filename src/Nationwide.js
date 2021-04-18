import React from "react";
import './Nationwide.css';
import { NavLink } from "react-router-dom";


export default function Nationwide() {
  return (
    <div className="nationwide">
      <div className="heading">
        <img src="https://pbs.twimg.com/profile_images/1289211316448657408/05SjVIel_400x400.jpg" className="logo" alt="Nationwide logo"></img>
        <div className="company-name">
          <span className="line"></span> <h2>Nationwide</h2> <span className="line"></span>
        </div>
        <div className="stats">
          <div className="rating">
            Circle rating
            <strong>5 / 5 <NavLink to="/rating"><i class="fas fa-info-circle" /></NavLink></strong> 
          </div>
          <div className="follow">
            <strong>Follow</strong>
          </div>
        </div>
        <form>
          <input text="text" placeholder="Search Nationwide services" />
        </form>
      </div>
      <div className="company-info">
        <h3>Company Information</h3> <span className="line-info"></span>
      </div>
      <div className="info">
        <p>Nationwide Building Society is a British mutual financial institution, the seventh largest cooperative financial institution and the largest building society in the world with over 15 million members.</p>
      </div>
      <div className="company-econ">
        <h3>Circular Economy</h3> <span className="line-econ"></span>
      </div>
      <div className="econ">
        <p>Nationwide had signed up to the United Nations Global Compact and aligned their strategy with the UN Sustainable Development Goals.</p>
        <p>Engaged in building a more sustainable society every day.</p>
      </div>
    </div>
  )
}