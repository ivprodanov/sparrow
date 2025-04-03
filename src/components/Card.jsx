import React from "react";

const Card = ({
  title,
  children,
  variant = "primary", // default variant
  size = "md", // default size
  cardImage,
  imageAlt = "image",
  stylings
}) => {
  const classNames = `card card-${variant} card-${size}`;
  return (
    <div className={stylings ? stylings : classNames}>
      {console.log(classNames)}
      {cardImage && variant != 'simple-card' && <div className="card--image">
        <img src={cardImage} alt={imageAlt} />
      </div>}
      <div className="card--content">
        <div className="card--content--title">
          <h1>{title}</h1>
        </div>
        <div className="card--content--content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
