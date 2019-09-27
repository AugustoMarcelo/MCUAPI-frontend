import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin: 0 10px 0 0;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);

  span {
    font-size: 16px;
    margin: 5px 0;
    padding: 10px 20px;
    border-right: 1px solid #ddd;
  }

  strong {
    font-size: 16px;
    padding: 10px;
    flex-grow: 1;
    text-align: center;
  }
`;
