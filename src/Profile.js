import React from "react";
import './Profile.css';

export default function Profile() {
  return (
    <div className="profile">
      <i className="fas fa-cog fa-lg"></i>
      <section className="photo-name">
        <img className="profile-img" src="https://static.wikia.nocookie.net/disney/images/3/37/Profile_-_Simba.jpeg" alt="Simba from Lion King"></img>
        <h2>Circle of Life</h2>
      </section>
      <section className="stats">
        <div className="following">
          100  <strong>Following</strong>
        </div>
        <div className="products">
          10 <strong>Products</strong>
        </div>
      </section>
      <section className="details">
        <h4>Personal Details</h4>
        <p>Athena Hackathon team composed by Andy Lu, Carla Gottschald Chiodi and Natalie Tang.</p>
      </section>
      <section className="carbon-footprint">
        <h4>Your Carbon Footprint Meter</h4>
        <p></p>
      </section>
      <section className="monthly-report">
        <h4>Monthly Report</h4>
        <p></p>
      </section>
    </div>
  )
}