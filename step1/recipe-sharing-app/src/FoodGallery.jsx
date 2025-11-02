import React from 'react';
import { GALLERY_ITEMS } from './constants';

function FoodGallery() {
  return (
    <div className="food-gallery">
      <h2 className="gallery-title">Get Inspired</h2>
      <div className="gallery-grid">
        {GALLERY_ITEMS.map((item, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={item.src}
              alt={item.alt}
              width="600"
              height="600"
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span>{item.overlay}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FoodGallery;

