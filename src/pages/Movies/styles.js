import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;

export const ShineEffect = styled.div`
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -300px;
    width: 200px;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
    transform: skew(-30deg);
    transition: 0.9s;
  }

  &:hover::before {
    left: 400px;
  }
`;

export const Card = styled.img`
  height: 296px;
  width: 200px;
  border-radius: 4px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;
