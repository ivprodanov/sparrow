import Carousel from "./Carousel";
import Card from "./Card";

const CardCarousel = (props) => (
  <Carousel
    {...props}
    items={props.cards}
    renderItem={(item) => (
      <Card {...item} size={props.size} variant={props.variant} />
    )}
  />
);

export default CardCarousel;