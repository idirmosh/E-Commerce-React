import React from 'react';
import './menu-item.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1>{title.toUpperCase()}</h1>
      <span>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
