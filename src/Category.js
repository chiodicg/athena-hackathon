import React from "react";
import './Category.css'

export default function Category(props) {
  return (
    <div className="category">
      <img src={props.image} alt={props.type} className="category-img" />
      <br />
      <strong>{props.type}</strong>
    </div>
  )
}