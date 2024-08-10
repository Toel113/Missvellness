import React, { useState } from "react";
import HTMLFlipBook from "react-pageflip";
import "./App.css"; // ใช้ไฟล์ CSS แยกต่างหาก

const images = [
  require("./image/image1.png"),
  require("./image/image2.png"),
  require("./image/image3.png"),
  require("./image/image4.png"),
  require("./image/image5.jpg"),
  require("./image/image6.jpg"),
  require("./image/image7.jpg"),
  require("./image/image8.jpg"),
  require("./image/image9.jpg"),
  require("./image/image10.png"),
  require("./image/image11.jpg"),
  require("./image/image12.png"),
  require("./image/image13.png"),
  require("./image/image14.png"),
];

const logo = [require("./image/logo.png")];

function App() {
  return (
    <div className="App">
      <EbookSlider />
    </div>
  );
}

const EbookSlider = () => {
  const [currentPage, setCurrentPage] = useState(0);

  // คำนวณเปอร์เซ็นต์ของหน้าปัจจุบัน
  const progressPercentage = ((currentPage + 1) / images.length) * 100;

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 d-flex justify-content-center">
            <HTMLFlipBook
              width={window.innerWidth < 768 ? 350 : 600}
              height={window.innerWidth < 768 ? 480 : 800}
              maxShadowOpacity={0.5}
              showCover={true}
              onFlip={(e) => setCurrentPage(e.data)}
              className="flipbook"
            >
              {images.map((image, index) => (
                <img
                  src={image}
                  key={index}
                  alt={`Page ${index + 1}`}
                  style={{ width: "100%", height: "100%" }}
                />
              ))}
            </HTMLFlipBook>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-12 col-md-8">
            <div className="progress-bar-container">
              <div className="progress-bar-background">
                <div
                  className="progress-bar"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
