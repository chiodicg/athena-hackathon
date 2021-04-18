import React from "react";
import './About.css';
import logo from './Circle-logo.png'

export default function About() {
  return (
    <div className="about">
      <section className="title">
        <img className="logo" src={logo} alt="Circle app logo"></img>
        <h2>Circle App</h2>
      </section>
      <section className="details">
        <h4>About</h4>
        <p>Circle was created to connect businesses and end consumers to facilitate the awareness extending products life. Circle also raise awareness of sustainability by explaining about recycle, monitoring the carbon footprint and rating companies based on their practices.</p>
        <p>We aim to build a community where users can share ideas of recycling and trade second-hand products.</p>
      </section>
      <section className="contact">
        <h4>Contact us</h4>
        <form>
          <input type="text" className="input" placeholder="Enter your name" size="25" autofocus required />
          <input type="email" className="input" placeholder="Enter your email" size="25" required />
          <textarea className="input" placeholder="Enter your message" rows="5" cols="35" required />
          <input type="submit" className="submit" />
        </form>
      </section>
    </div>
  )
}