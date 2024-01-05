// components/ExampleCarouselImage.js
import React from 'react';
import Image from 'react-bootstrap/Image';

const ExampleCarouselImage = ({ text }) => (
  <Image
    src="https://via.placeholder.com/800x400" // Replace with the actual image URL
    alt={text}
    fluid
  />
);

export default ExampleCarouselImage;
