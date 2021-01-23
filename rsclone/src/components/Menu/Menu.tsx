import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="about us">&#x1f4ae;</span>
        About us
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f43c;</span>
        Pricing
      </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
      </a>
    </StyledMenu>
  )
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
