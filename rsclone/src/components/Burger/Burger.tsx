import React from 'react';
import { StyledBurger } from './Burger.styled';
import { IMenuToggle } from '@/constants';

const Burger = ({ open, setOpen }: IMenuToggle) => (
  <StyledBurger open={open} onClick={() => setOpen(!open)}>
    <div />
    <div />
    <div />
  </StyledBurger>
);

export default Burger;
