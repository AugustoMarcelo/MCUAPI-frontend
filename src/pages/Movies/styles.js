import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
`;

export const Card = styled.img`
  height: 296px;
  width: 200px;
  border-radius: 4px;
  box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.3);
`;
