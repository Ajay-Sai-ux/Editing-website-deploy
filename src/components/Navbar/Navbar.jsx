import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const videoSources = [
  assets.file1,
  assets.file2,
  assets.file3,
  assets.file4,
  assets.file5,
  assets.file6,
  assets.file7,
  assets.file8,
  assets.file9,
  assets.file10,
  assets.file11,
  assets.file12,
  assets.file13,
  assets.file14,
  assets.file15,
  assets.file16,
  assets.file17,
  assets.file18,
  assets.file19,
  assets.file20,
  assets.file21,
];

const Navbar = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnd = () => {
    // Move to the next video, looping back to the start if at the end
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  return (
    <div className="navbar">
      <div>
        <video
          key={currentVideoIndex} // Ensure React re-renders the video element on index change
          autoPlay
          muted
          className="nav_video_background"
          onEnded={handleVideoEnd}
        >
          <source src={videoSources[currentVideoIndex]} type="video/mp4" />
        </video>
      </div>

      <div className="herocontent">
        <div className="header">
          <h1 className="nav_logo">WEBSITE</h1>
          <div className="nav_menu">
            <a href="">EDITOR</a>
            <a href="">CONTACT</a>
          </div>
        </div>

        <div className="nav_video_tittle">
          <div className="nav_video_content">
            <h2 className="nav_subtext">Virgin Media</h2>
            <div className="nav_discription">
              <h3>Goat Glider</h3>
              <h3>Editor - Tim Thornton-Allan</h3>
            </div>
          </div>

          <div className="nav_carousel">
            <button
              onClick={() =>
                setCurrentVideoIndex(
                  (currentVideoIndex - 1 + videoSources.length) % videoSources.length
                )
              }
            >
              <img src={assets.left_chevron} alt="Left" />
            </button>
            <button
              onClick={() =>
                setCurrentVideoIndex((currentVideoIndex + 1) % videoSources.length)
              }
            >
              <img src={assets.right_chevron} alt="Right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
