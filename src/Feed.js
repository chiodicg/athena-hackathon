import React from "react";
import './Feed.css'

export default function Feed(props) {
  return (
    <div className="feed">
      <div className="title">
        <img src={props.logo} className="logo"></img>
        <h3>{props.company}</h3>
      </div>
      <div className="body">
        <img className="feed" src={props.image} alt="world with Cisco logo"></img>
        <p>
          {props.text}
        </p>
      </div>
    </div>
  )
}