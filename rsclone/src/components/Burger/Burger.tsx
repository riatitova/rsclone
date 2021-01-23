// import React from 'react';
// import style from "@/components/Burger/Burger.scss";
//
// const Burger = () => {
//   return (
//     <div className={style.burger}>
//       <span>Burger</span>
//     </div>
//   )
// }
// export default Burger;


import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  )
};

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
