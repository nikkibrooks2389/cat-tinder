import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #f0c420;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  color: white;
  font-weight: bold;
  cursor: pointer;
  margin-top: 8px;

  &:hover {
    background-color: #e0b020;
  }
`;

function NextCatButton({ onClick }) {
  return <Button onClick={onClick}>See Another Cat 🔄</Button>;
}

export default NextCatButton;