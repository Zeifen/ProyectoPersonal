import Carousel from "react-bootstrap/Carousel";
import { images } from "../data/data.jsx";

const Carrousel = () => {
  return (
    <>
      <div className="container carousel-size">
        <Carousel>
          {images.map((image) => (
            <Carousel.Item interval={2000} key={image.id}>
              <img
                className="carousel-image"
                src={image.source}
                alt={image.title}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Carrousel;
