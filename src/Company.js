import React from "react";
import './Company.css';
import { NavLink } from "react-router-dom";

export default function Company() {
  return (
    <div className="company">
      <h2>Companies</h2>
      <NavLink to="/company/cisco">
        <div className="companies">
          <img src="https://www.vortex6.com/wp-content/uploads/2019/07/cisco-logo.png" className="logo" alt="Cisco logo"></img>
          <h3>Cisco</h3>
        </div>
      </NavLink>
      <NavLink to="/company/lloyds">
        <div className="companies">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGyi08wAFrxozdS_YKZyw-RD5A0TJr3TUc63JLXML3X41dFWiRnBD8Pv0emJzIAaV73dE&usqp=CAU" className="logo" alt="Lloyds bank logo"></img>
          <h3>Lloyds Bank</h3>
        </div>
      </NavLink>
      <NavLink to="/company/nationwide">
        <div className="companies">
          <img src="https://pbs.twimg.com/profile_images/1289211316448657408/05SjVIel_400x400.jpg" className="logo" alt="Nationwide bank logo"></img>
          <h3>Nationwide</h3>
        </div>
      </NavLink>
    </div>
  )
}