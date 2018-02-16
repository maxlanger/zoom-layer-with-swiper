import React, { Component } from 'react';
import ZoomLayerComponent from './zoomlayer.component';

const props = {
  images: [
    {
      src: 'http://via.placeholder.com/1000x1000/ff0000/ffffff/?text=image+1',
      alt: 'image 1',
    },
    {
      src: 'http://via.placeholder.com/1000x1000/00ff00/ffffff/?text=image+2',
      alt: 'image 2',
    },
    {
      src: 'http://via.placeholder.com/1000x1000/0000ff/ffffff/?text=image+3',
      alt: 'image 3',
    },
  ],
};

class App extends Component {
  render() {
    return (
      <div>
        <h1>Zoom Layer with Swiper</h1>
        <ZoomLayerComponent {...props}>
        </ZoomLayerComponent>
      </div>
    );
  }
}

export default App;
