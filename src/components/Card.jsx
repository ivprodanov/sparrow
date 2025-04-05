import React from "react";

const Card = ({
  title,
  children,
  variant = "primary",
  size = "md",
  cardImage,
  imageAlt = "image",
  className
}) => {
  const classNames = `card card-${variant} card-${size}`;
  return (
    <div className={`${classNames} ${className}`}>
      {console.log(classNames)}
      {cardImage && variant != "simple-card" && (
        <div className="card--image">
          <img src={cardImage} alt={imageAlt} />
        </div>
      )}
      <div className="card--content">
        <div className="card--content--title">
          <h1>{title}</h1>
        </div>
        <div className="card--content--content">{children}</div>
      </div>
    </div>
  );
};

export default Card;
