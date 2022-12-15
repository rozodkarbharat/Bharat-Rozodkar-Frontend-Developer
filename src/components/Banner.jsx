import React from 'react'
import "../css/banner.css"
const Banner = () => {
  return (
    <div className="banner-main">
      <h1>Banner</h1>
      {/* <img src='rocket1.webp' alt=''/> */}
      <p className="banner-text">
        STARSHIP SELECTED BY NASA TO SUPPORT SUSTAINED LUNAR EXPLORATION
      </p>
      <div>
        <a
          className="banner-btn"
          href="https://www.spacex.com/updates/#sustained-lunar-exploration"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Banner
