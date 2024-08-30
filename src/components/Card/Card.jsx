import React from 'react'
import "./Card.css"
import { assets } from '../../assets/assets'

const Card = () => {
  return (
    <div className="card">
      <img className="card_img" src={assets.Frame} alt="Card Image" />
      <video autoPlay loop muted className="card_video">
        <source src={assets.dog} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="card_content_top">
        <h4>Virgin Media</h4>
        <p>Estroven</p>
      </div>

      <div className="card_content_bottom">
        <div className="card_bottom_group">
          <p>Estroven</p>
          <h4>Virgin Media</h4>
        </div>
        <div className="card_bottom_group">
          <p>Estroven</p>
          <h4>Virgin Media</h4>
        </div>
        <div className="card_bottom_group">
          <p>Estroven</p>
          <h4>Virgin Media</h4>
        </div>
      </div>
    </div>
  );
}

export default Card