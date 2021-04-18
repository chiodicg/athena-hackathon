import React from "react";
import { NavLink } from "react-router-dom";
import './Lloyds.css';

export default function Lloyds() {
  return (
    <div className="lloyds">
      <div className="heading">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyi08wAFrxozdS_YKZyw-RD5A0TJr3TUc63JLXML3X41dFWiRnBD8Pv0emJzIAaV73dE&usqp=CAU" className="logo" alt="Lloyds Bank logo"></img>
        <div className="company-name">
          <span className="line"></span> <h2>Lloyds Bank</h2> <span className="line"></span>
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
          <input text="text" placeholder="Search LLoyds services" />
        </form>
      </div>
      <div className="company-info">
        <h3>Company Information</h3> <span className="line-info"></span>
      </div>
      <div className="info">
        <p>Lloyds Banking Group is a leading UK based financial services group providing a wide range of banking and financial services, focused on personal and commercial customers.</p>
      </div>
      <div className="company-econ">
        <h3>Circular Economy</h3> <span className="line-econ"></span>
      </div>
      <div className="econ">
        <p>Lloyds wants to become a leader in helping the UK transition to becoming a more sustainable, low carbon economy.</p>
        <p>Targets by 2030:
          <ul>
            <li>Net zero carbon</li>
            <li>Reduce total energy consumption by 50%</li>
            <li>Travel emission below 50% pre-COVID levels</li>
          </ul>
        </p>
      </div>
    </div>
  )
}