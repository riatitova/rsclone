import style from 'styled-components';

export const StyledMenu = style.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFF;
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 10;
  
  @media (max-width: 650px) {
    width: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
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
  }
`;
