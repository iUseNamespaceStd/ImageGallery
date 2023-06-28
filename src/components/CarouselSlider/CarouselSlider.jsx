import React from "react";
import { Carousel } from "react-bootstrap";
import "./CarouselSlider.scss";
import { ImageContext } from "../../services/ImageContext";

class CarouselSlider extends React.Component {
  static contextType = ImageContext;

  render() {
    const contextValue = this.context;
    return (
      <Carousel
        activeIndex={this.props.activeIndex}
        onSelect={this.props.onSelect}
      >
        {contextValue?.imageDataArr.map((photo) => (
          <Carousel.Item>
            <img
              className="d-block"
              src={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
              alt={photo.title}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
}

export default CarouselSlider;
