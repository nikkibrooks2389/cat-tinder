import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

function Navbar() {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </Nav>
  );
}

export default Navbar;