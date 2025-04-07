import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

function CatImage({ imageUrl }) {
  if (!imageUrl) {
    return <p>No cat image available.</p>;
  }

  return <Image src={imageUrl} alt="Cute cat" />;
}

export default CatImage;