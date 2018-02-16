import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';

const Image = styled.img`
  width: 100%;
`;

class ZoomLayerComponent extends React.Component {
  render() {
    const { images } = this.props;

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 10,
    };

    return (
      <div>
        <Swiper {...swiperParams}>
          {images.map((image, index) => (
            <Image src={image.src} key={image.alt} alt={image.alt} />
          ))}
        </Swiper>
      </div>
    );
  }
}

export default ZoomLayerComponent;
