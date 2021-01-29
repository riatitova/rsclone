import styled from 'styled-components';

export const StyledBoardList = styled.div`
  display: flex;
  flex-direction: row;
  // width: 100vw;
  height: auto;
  color: #000;
  justify-content: space-between;
`;

export const StyledAddBoardBlock = styled.div`
  width: 10rem;
  height: 7rem;
  margin: 1rem;
  padding: 0.5rem;
  color: #06cafe;
  background-color: #fbfafa;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  border: none;
  border-radius: 7%;
  box-shadow: 0.5rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
`;

export const StyledBoardLink = styled(StyledAddBoardBlock)`
  padding: 0;
  line-height: 7rem;
  a {
    text-decoration: none;
    color: #06cafe;
  }
`;

export const StyledBoardInputWrapper = styled.div`
  position: relative;
  height: 2rem;
  width: 9rem;
  margin: 0.5rem 0;

  input {
    width: 9rem;
    height: 2rem;
    padding: 0 1.5rem 0 0.9rem;
    font-size: 0.7rem;
    text-align: left;
    border: none;
    border-radius: 2rem;
    outline: none;
    box-shadow: 0.5rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);

    &::placeholder {
      color: #e3e3e3;
    }
  }

  button {
    position: absolute;
    right: 0;
    width: 2rem;
    height: 2rem;
    background-color: #fbfafa;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    line-height: 1.5rem;
    color: #fff;
    text-transform: uppercase;
    background-color: #06cafe;
    border: none;
    outline: none;
    border-radius: 1rem;
    box-shadow: 0.3rem 0.3rem 1rem 0 rgba(0, 0, 0, 0.1);

    &:hover {
      cursor: pointer;
      color: #06cafe;
      background-color: #fff;
      box-shadow: 0.5rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.1);
      transition: all 0.5s ease;
    }

    &:not(:hover) {
      transition: all 0.5s ease;
    }
    &:active {
      transform: translateY(4px);
    }
  }
`;
// export default StyledBoardList;
