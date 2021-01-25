import style from 'styled-components';
import { IMenu } from '@/constants';

export const StyledMenu = style.nav<IMenu>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #FFF;
  height: 100vh;
  text-align: left;
  padding: 9.5rem 1.8rem 2rem 1.3rem;
  position: absolute;
  top: 0;
  left: 0;
  box-shadow: 0 0.5rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 10;
  
  @media (max-width: 650px) {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    // text-transform: uppercase;
    padding: 0.5rem 0;
    // font-weight: bold;
    letter-spacing: 0.1rem;
    color: #000;
    text-decoration: none;
    transition: color 0.3s linear;
    
    @media (max-width: 750px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #30CFD0;
    }
    
    span {
      padding-right: 0.5rem;
    }
  }
`;
