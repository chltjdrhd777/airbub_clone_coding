import React from "react";
import "../css/Card.css";

export interface CardeProps {
  src?: string;
  title?: string;
  description?: string;
  price?: number;
}

function Card({ src, title, description, price }: CardeProps) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
        <h3>{price}</h3>
      </div>
    </div>
  );
}

export default Card;
