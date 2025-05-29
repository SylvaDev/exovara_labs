import React, { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ videoSrc, title, description, onVideoStateChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Notify parent component when video state changes
    onVideoStateChange?.(isPlaying);
  }, [isPlaying, onVideoStateChange]);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-container" style={{ position: 'relative', height: '300px' }}>
      <video
        ref={videoRef}
        className="d-block w-100"
        style={{
          height: '300px',
          objectFit: 'cover',
          objectPosition: 'center'
        }}
        onClick={isPlaying ? handlePause : handlePlay}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {!isPlaying && (
        <div 
          className="play-button-overlay"
          onClick={handlePlay}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            cursor: 'pointer'
          }}
        >
          <div 
            className="play-button"
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 215, 0, 0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              style={{
                width: 0,
                height: 0,
                borderTop: '20px solid transparent',
                borderBottom: '20px solid transparent',
                borderLeft: '30px solid #000',
                marginLeft: '5px'
              }}
            />
          </div>
        </div>
      )}
      
      <div className="carousel-caption">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer; 