// src/components/LightboxGallery.js

import React from 'react';
import dynamic from 'next/dynamic';
import 'react-lightbox-component/build/css/index.css';

// Chargement dynamique de Lightbox
const Lightbox = dynamic(() => import('react-lightbox-component'), { ssr: false });

const LightboxGallery = () => {
  const images = [
    { src: '/img/maher_photo.jpg', alt: 'Photo 1' },
    { src: '/img/maher.jpg', alt: 'Photo 2' },
    { src: '/img/100_1081.JPG', alt: 'Photo 3' },
    { src: '/img/421_0436.JPG', alt: 'Photo 4' },
    { src: '/img/421_0466.JPG', alt: 'Photo 5' },
    { src: '/img/Image55.jpg', alt: 'Photo 6' },
    { src: '/img/IMG_0278.JPG', alt: 'Photo 7' },
    { src: '/img/Maher03.jpg', alt: 'Photo 8' },
    { src: '/img/photo_00521.jpg', alt: 'Photo 9' },
  ];

  return (
    <Lightbox
      images={images}
      render={{
        button: (onClick, isOpen) => (
          <div
            onClick={onClick}
            style={{ cursor: 'pointer', margin: '0 auto', textAlign: 'center' }}
          >
            {isOpen ? 'Fermer' : 'Ouvrir'}
          </div>
        ),
      }}
    />
  );
};

export default LightboxGallery;
