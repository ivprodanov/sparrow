import React from 'react';
import GlassImage from '../assets/images/glass.jpg'

const Card = ({
  children,
  variant = 'primary', // default variant
  size = 'md',         // default size
  cardImage = GlassImage,
  imageAlt = 'image'
}) => {
  const classNames = `card card-${variant} card-${size}`;
  return (
    <div className={classNames}>
    <div class="card--image">
        <img src={cardImage} alt={imageAlt}/>
    </div>
        <div class="card--content">{children}</div>
    </div>
  );
};

export default Card;
