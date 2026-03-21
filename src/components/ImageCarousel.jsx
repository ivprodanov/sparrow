import Carousel from "./Carousel";

const ImageCarousel = (props) => (
  <Carousel
    {...props}
    items={props.images}
    renderItem={(item) => (
      <img src={item.src} alt={item.alt} className="carousel-image" />
    )}
  />
);

export default ImageCarousel;