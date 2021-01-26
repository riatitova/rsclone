import styled from 'styled-components';

import { IMenu } from '@/constants';

const StyledBurger = styled.button<IMenu>`
  position: relative;
  top: 0.2rem;
  margin: 0 0.3rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 11;
  
  &:focus {
    outline: none;
  }
  
  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    background: ${({open }) => open ? '#30CFD0' : '#000'};
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
    
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export default StyledBurger;
