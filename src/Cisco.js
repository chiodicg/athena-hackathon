import React from "react";
import './Cisco.css';

export default function Cisco() {
  return (
    <div className="cisco">
      <div className="heading">
        <img src="https://www.vortex6.com/wp-content/uploads/2019/07/cisco-logo.png" className="logo" alt="Cisco logo"></img>
        <div className="company-name">
          <span className="line"></span> <h2>Cisco</h2> <span className="line"></span>
        </div>
        <div className="stats">
          <div className="rating">
            Circle rating
            <strong>5 / 5 <i class="fas fa-info-circle" /></strong> 
          </div>
          <div className="follow">
            <strong>Follow</strong>
          </div>
        </div>
        <form>
          <input text="text" placeholder="Search Cisco products" />
        </form>
      </div>
      <div className="company-info">
        <h3>Company Information</h3> <span className="line-info"></span>
      </div>
      <div className="info">
        <p>CISCO SYSTEMS INC. IS THE WORLDWIDE LEADER in networking for the Internet. Cisco's networking solutions connect people, computing devices and computer networks, allowing people to access or transfer information without regard to differences in time, place or type of computer system.</p>
      </div>
      <div className="company-econ">
        <h3>Circular Economy</h3> <span className="line-econ"></span>
      </div>
      <div className="econ">
        <p>Cisco’s holistic approach extends from how they design, build, and deliver products, to how they value the assets we have and turn them into new products. They also apply Cisco technology to support their customers in their own circular transformations. Cisco was a founding member of the Ellen MacArthur Foundation (EMF), which allows us to partner with other companies to achieve a circular economy.</p>
        <p>Cisco is increasingly adopting circular design principles, including transforming their e-waste into recycled plastic that is used in some of their latest products.</p>
      </div>
    </div>
  )
}