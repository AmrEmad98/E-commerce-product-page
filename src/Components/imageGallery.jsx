import React, { useState } from 'react';

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState("./images/image-product-1.jpg");

  const handleClick = (image) => {
    // Update the state to the clicked image
    setSelectedImage(image);
  };

  const images = ["./images/image-product-1-thumbnail.jpg",
  "./images/image-product-2-thumbnail.jpg",
  "./images/image-product-3-thumbnail.jpg",
  "./images/image-product-4-thumbnail.jpg"];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {images.map((image, index) => (
          <img
            className='h-10 w-10'
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            style={{ cursor: 'pointer', margin: '5px' }}
            onClick={() => handleClick(image)}
          />
        ))}
      </div>

      {selectedImage && (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>Clicked Image:</p>
          <img
            src={selectedImage}
            alt="Selected Image"
            style={{ width: '100px', height: '50px' }} // Adjust the size as needed
          />
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
