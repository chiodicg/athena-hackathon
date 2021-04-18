import React from "react";
import './Rating.css';

export default function Rating() {
  return (
    <div className="rating">
      <div className="title">
        <h2>Circle Rating</h2> <span className="line"></span>
      </div>
      <div className="info">
        <p>Circle Rating is a rating created by Circle to help consumers make better decisions. At Circle we believer that reducing consumption and making better decisions in the way we consume things is a crucial step to help improve the circular economy.</p>
        <p>The rating is calculated out of five as an average from the rating categories specfiied below. The rating is reviewed and verified by the sustainability expert team here at Circle.</p>
        <div className="rating-categories">
          <div className="category">Material Usage</div>
          <div className="category">Manufacturing Processes</div>
        </div>
        <div className="rating-categories">
          <div className="category">Energy Usage</div>
          <div className="category">Supply Chain</div>
        </div>
        <div className="rating-categories">
          <div className="category">End of Life Methods</div>
          <div className="category">Social Improvements</div>
        </div>
      </div>
    </div>
  )
}