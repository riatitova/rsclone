import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';

const Menu = ({open}) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
        <span role="img" aria-label="homepage">&#x1f4ae;</span>
        Homepage
      </a>
      <a href="/">
        <span role="img" aria-label="templates">&#x1f682;</span>
        Templates
      </a>
      <a href="/">
        <span role="img" aria-label="go to boards">	&#x1f427;</span>
        Go to boards
      </a>
      <a href="/">
        <span role="img" aria-label="create board">	&#x1f506;</span>
        Create board
      </a>
      <a href="/">
        <span role="img" aria-label="go to lists">&#x1f352;</span>
        Go to lists
      </a>
    </StyledMenu>
  )
};

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
