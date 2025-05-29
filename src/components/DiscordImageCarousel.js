import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import discordService from '../services/discordService';

const DiscordImageCarousel = ({ limit = 10 }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const messages = await discordService.getChannelMessages(limit);
        const imageUrls = discordService.extractImageUrls(messages);
        setImages(imageUrls);
      } catch (err) {
        setError('Failed to load images from Discord');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [limit]);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    );
  }

  if (images.length === 0) {
    return (
      <div className="alert alert-info" role="alert">
        No images found in the Discord channel.
      </div>
    );
  }

  return (
    <Carousel>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <div
            className="d-block w-100"
            style={{
              height: '400px',
              backgroundImage: `url(${image.url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Carousel.Caption>
            <h3>Project Update</h3>
            <p>{image.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default DiscordImageCarousel; 