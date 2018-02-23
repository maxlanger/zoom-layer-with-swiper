import React from 'react';
import styled from 'styled-components';
import Swiper from 'react-id-swiper';

const Wrapper = styled.div`
`;

const ZoomWrapper = styled.div`
  //width: 100%;
  //height: calc(100vh - 100px);
`;

const ZoomImage = styled.img`
  width: 500px;
  height: 500px;
  display: block;
  margin: 0 auto;
`;

const ThumbnailsWrapper = styled.div`
  margin: 0 auto;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
`;

class ZoomLayerComponent extends React.Component {
  render() {
    const { images } = this.props;

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 10,
    };

    return (
      <Wrapper>
        <ZoomWrapper>
          <Swiper {...swiperParams}>
            {images.map((image, index) => (
              <div key={image.alt}>
                <ZoomImage src={image.src} alt={image.alt} />
              </div>
            ))}
          </Swiper>
        </ZoomWrapper>
        <ThumbnailsWrapper>
          {images.map((image, index) => (
            <Thumbnail src={image.src} key={image.alt} alt={image.alt} />
          ))}
        </ThumbnailsWrapper>
      </Wrapper>
    );
  }
}

export default ZoomLayerComponent;
