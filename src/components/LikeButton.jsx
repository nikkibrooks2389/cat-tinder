import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ff6b6b;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #ff4c4c;
  }
`;

function LikeButton({ onClick }) {
  return <Button onClick={onClick}>Like ❤️</Button>;
}

export default LikeButton;