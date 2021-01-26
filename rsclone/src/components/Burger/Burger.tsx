import React from 'react';

import { IMenuToggle } from '@/constants';

import StyledBurger from './Burger.styled';

const Burger = ({ open, setOpen }: IMenuToggle) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default Burger;
