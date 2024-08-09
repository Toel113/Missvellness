import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';

const images = [
  require('./image/image1.jpg'),
  require('./image/image2.jpg'),
  require('./image/image3.jpg'),
  require('./image/image4.jpg'),
  require('./image/image5.jpg'),
  require('./image/image6.jpg'),
  require('./image/image7.jpg'),
];

function App() {
  return (
    <div className="App">
      <EbookSlider />
    </div>
  );
}

const EbookSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const progressPercentage = ((currentPage + 1) / images.length) * 100;

  return (
    <div style={{}}>
      <HTMLFlipBook
        width={600}
        height={800}
        maxShadowOpacity={0.5}
        showCover={true}
        onFlip={(e) => setCurrentPage(e.data)}
      >
        {images.map((image, index) => (
          <div className="demoPage" key={index} style={{ padding: 10 }}>
            <img src={image} alt={`Page ${index + 1}`} style={{ width: '100%', height: '100%' }} />
          </div>
        ))}
      </HTMLFlipBook>
      <div style={{ marginTop: '20px', textAlign: 'center', width: '100%' }}>
        <div style={{ height: '10px', width: '80%', margin: '0 auto', backgroundColor: '#e0e0df', borderRadius: '5px' }}>
          <div
            style={{
              height: '100%',
              width: `${progressPercentage}%`,
              backgroundColor: '#76c7c0',
              borderRadius: '5px',
              transition: 'width 0.3s ease-in-out'
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
